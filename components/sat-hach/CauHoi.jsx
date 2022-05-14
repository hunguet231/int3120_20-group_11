import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import { RadioButton, TouchableRipple } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppConstant } from "../../constants";
import Clock from "../shared/Clock";

const win = Dimensions.get("window");

function CauHoi({ route, navigation }) {
  // Lay id parameter da truyen vao tu truoc
  const { id, type } = route.params;

  const [index, setIndex] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = React.useState("");
  const [selectedQuestions, setSelectedQuestions] = React.useState({});
  const [selectedQuestionsDetails, setSelectedQuestionsDetails] =
    React.useState({});

  const handleChange = (value) => {
    setValue(value);
  };

  const handleNextQuestion = () => {
    setIndex(index + 1);
  };

  const getSelectedQuestionsFromStorage = async () => {
    try {
      const data =
        JSON.parse(await AsyncStorage.getItem("@selected_questions_details")) ||
        {};
      setSelectedQuestionsDetails(data);
      setSelectedQuestions(data[type]?.[`set${id}`] || {});
    } catch (e) {
      console.log(e);
      Alert.alert(<Text>Oops!</Text>, <Text>Có lỗi xảy ra!</Text>);
    }
  };

  const saveSelectedQuestionsToStorage = async (newData) => {
    try {
      selectedQuestionsDetails[type] = selectedQuestionsDetails[type] || {};
      selectedQuestionsDetails[type][`set${id}`] = newData;
      await AsyncStorage.setItem(
        "@selected_questions_details",
        JSON.stringify(selectedQuestionsDetails)
      );
    } catch (e) {
      console.log(e);
      Alert.alert(<Text>Oops!</Text>, <Text>Có lỗi xảy ra!</Text>);
    }
  };

  useEffect(async () => {
    await fetchQuestions(id);
    await getSelectedQuestionsFromStorage();
  }, []);

  useEffect(() => {
    if (value) {
      const newData = { ...selectedQuestions, [index]: value };
      saveSelectedQuestionsToStorage(newData);
      setSelectedQuestions(newData);
    }
  }, [value]);

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
                        answers {
                          items {
                            id
                            question_id
                            content
                            is_true
                            createdAt
                            updatedAt
                          }
                          nextToken
                        }
                        explain
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
      setLoading(false);
      Alert.alert(<Text>Oops!</Text>, <Text>Có lỗi xảy ra!</Text>);
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loading}
        color={AppConstant.DEFAULT_APP_COLOR}
      />
    );
  }

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Clock />
        <Text style={styles.headerText}>
          Câu số {index + 1}/{questions.length}
        </Text>
        <TouchableHighlight style={styles.endBtn}>
          {index === questions.length - 1 ? (
            <Text style={styles.endBtnText}>Kết thúc</Text>
          ) : (
            <Text style={styles.endBtnText} onPress={handleNextQuestion}>
              Câu sau
            </Text>
          )}
        </TouchableHighlight>
      </View>

      <ScrollView>
        <Text style={styles.question}>{questions[index]?.content}</Text>

        {questions[index]?.image ? (
          <Image
            source={{ uri: questions[index].image }}
            style={styles.questionImage}
            resizeMode={"contain"}
          />
        ) : (
          <Text></Text>
        )}

        <View style={styles.answerView}>
          <RadioButton.Group
            style={styles.radioGroup}
            onValueChange={(newValue) => setValue(newValue)}
            value={selectedQuestions[index] || value}
          >
            {questions[index]?.answers?.items.map((answer, indexQuestion) => (
              <TouchableRipple
                key={answer.id}
                rippleColor="rgba(0, 0, 0, .32)"
                onPress={() => handleChange(`answer${answer.id}`)}
              >
                <View style={styles.answer}>
                  <View style={styles.answerTextContainer}>
                    <View style={styles.answerIndex}>
                      <Text>{indexQuestion + 1}</Text>
                    </View>
                    <Text
                      style={
                        selectedQuestions[index] === `answer${answer.id}` ||
                        value === `answer${answer.id}`
                          ? styles.answerTextCheck
                          : styles.answerText
                      }
                    >
                      {answer.content}
                    </Text>
                  </View>
                  <RadioButton
                    color={AppConstant.DEFAULT_APP_COLOR}
                    value={`answer${answer.id}`}
                    style={styles.radio}
                  />
                </View>
              </TouchableRipple>
            ))}
          </RadioButton.Group>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerBtn}
          onPress={() => {
            navigation.navigate("Chọn câu hỏi", {
              current: index + 1,
              total: questions.length,
              setIndex,
              selectedQuestions,
            });
          }}
        >
          <View>
            <Image
              source={require("../../assets/triangle.png")}
              style={styles.footerImage}
            />
            <Text style={styles.footerText}>
              Câu {index + 1}/{questions.length}
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
  loading: {
    marginTop: 10,
  },
  endBtn: {
    backgroundColor: "rgb(112, 146, 254)",
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
    backgroundColor: "rgb(112, 146, 254)",
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
    diplay: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  questionImage: {
    flex: 1,
    alignSelf: "stretch",
    width: win.width,
    height: 200,
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
