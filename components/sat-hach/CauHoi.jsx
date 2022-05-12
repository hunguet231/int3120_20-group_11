import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { RadioButton, TouchableRipple } from "react-native-paper";
import { AppConstant } from "../../constants";
import Clock from "../shared/Clock";

function CauHoi({ route, navigation }) {
  // Lay id parameter da truyen vao tu truoc
  const param = route.params.id;

  const [id, setId] = React.useState(param);
  const [index, setIndex] = React.useState(1);
  const [questions, setQuestions] = React.useState([]);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = React.useState("");
  const [isChosen, setChosen] = React.useState(false);

  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(async () => {
    setId(param);
    await fetchQuestions(param);
  }, []);

  const fetchQuestions = async (id) => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: `query {
                  getSet(id: ${id}) {
                    id
                    time_left
                    chosen_number
                    total
                    chosen {
                      id
                      question_id
                      content
                      is_true
                      createdAt
                      updatedAt
                    }
                    type
                    questions {
                      items {
                        id
                        set_id
                        content
                        image
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                  }
                }`,
        authMode: "API_KEY",
      });
      const res = data.getSet.questions.items;
      setQuestions(res);
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Clock />
        <Text style={styles.headerText}>
          Câu số {index}/{questions.length}
        </Text>
        <TouchableHighlight style={styles.endBtn}>
          {index === 25 ? (
            <Text style={styles.endBtnText}>Kết thúc</Text>
          ) : (
            <Text style={styles.endBtnText}>Câu sau</Text>
          )}
        </TouchableHighlight>
      </View>

      <Text style={styles.question}>
        Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là
        gì?
      </Text>

      <View style={styles.answerView}>
        <RadioButton.Group
          style={styles.radioGroup}
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => handleChange("first")}
          >
            <View style={styles.answer}>
              <View style={styles.answerTextContainer}>
                <Text style={styles.answerIndex}>1</Text>
                <Text
                  style={
                    value.includes("first")
                      ? styles.answerTextCheck
                      : styles.answerText
                  }
                >
                  Phần mặt đường và lề đường. Phần mặt đường và lề đường.Phần
                  mặt đường và lề đường.
                </Text>
              </View>
              <RadioButton
                color={AppConstant.DEFAULT_APP_COLOR}
                value="first"
                style={styles.radio}
              />
            </View>
          </TouchableRipple>

          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => handleChange("second")}
          >
            <View style={styles.answer}>
              <Text style={styles.answerIndex}>2</Text>
              <Text
                style={
                  value.includes("second")
                    ? styles.answerTextCheck
                    : styles.answerText
                }
              >
                Phần đường xe chạy.
              </Text>
              <RadioButton
                color={AppConstant.DEFAULT_APP_COLOR}
                value="second"
                style={styles.radio}
              />
            </View>
          </TouchableRipple>

          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => handleChange("third")}
          >
            <View style={styles.answer}>
              <Text style={styles.answerIndex}>3</Text>
              <Text
                style={
                  value.includes("third")
                    ? styles.answerTextCheck
                    : styles.answerText
                }
              >
                Phần đường xe cơ giới.
              </Text>
              <RadioButton
                color={AppConstant.DEFAULT_APP_COLOR}
                value="third"
                style={styles.radio}
              />
            </View>
          </TouchableRipple>
        </RadioButton.Group>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerBtn}
          onPress={() => {
            navigation.navigate("Chọn câu hỏi");
          }}
        >
          <View>
            <Image
              source={require("../../assets/triangle.png")}
              style={styles.footerImage}
            />
            <Text style={styles.footerText}>
              Câu {index}
              /25
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#E4E4E4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontSize: 14,
  },
  endBtn: {
    background: "rgb(112 146 254)",
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  endBtnText: {
    color: "#fff",
  },
  endBtnHighLight: {
    backgroundColor: "rgb(112 146 254)",
  },
  question: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    borderBottomWidth: 1,
    borderColor: "rgb(226, 226, 226)",
    padding: 15,
  },
  answer: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "rgb(226, 226, 226)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    paddingBottom: 6,
  },
  answerIndex: {
    height: 20,
    width: 20,
    backgroundColor: "#E4E4E4",
    textAlign: "center",
    borderRadius: 50,
  },
  answerTextContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flex: 1,
  },
  answerText: {
    fontSize: 14,
    lineHeight: 18,
    alignItems: "center",
    color: "black",
    marginLeft: 8,
    flex: 1,
  },
  answerTextCheck: {
    fontSize: 14,
    lineHeight: 18,
    alignItems: "center",
    color: "#099D18",
    marginLeft: 8,
    flex: 1,
  },
  radio: {
    flex: 1,
  },
  footer: {
    bottom: 0,
    height: 60,
    width: "100%",
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
    position: "absolute",
    alignItems: "center",

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  footerBtn: {
    height: "100%",
    width: "100%",
  },
  footerImage: {
    height: 10,
    width: 15,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    marginBottom: 8,
  },
  footerText: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 15,
    color: "#FFF",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
};

export default CauHoi;
