import { API } from "aws-amplify";
import React, { useEffect, useState, useRef } from "react";
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
import { getAnswerOrder } from "../../utils/getAnswerOrder";

const win = Dimensions.get("window");

function CauHoiLT({ route, navigation }) {
  const { id, type, isEnd } = route.params;
  const clockRef = useRef();
  const scrollRef = useRef();

  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(isEnd);
  const [showExplain, setShowExplain] = useState(isEnd);
  const [value, setValue] = useState("");
  const [end, setEnd] = useState(isEnd);
  const [selectedQuestions, setSelectedQuestions] = useState({});
  const [selectedQuestionsDetails, setSelectedQuestionsDetails] = useState({});

  const handleChange = (value) => {
    setValue(value);
  };

  const handleNextQuestion = () => {
    setIndex(index + 1);
  };

  const handleEnd = async () => {
    setShowResult(true);
    setShowExplain(true);
    clockRef.current.pause();

    // mark exam with id as 'end'
    const dataEnds = JSON.parse(await AsyncStorage.getItem("@end_exams")) || {};

    dataEnds[type] = dataEnds[type] || {};
    dataEnds[type][id] = true;

    await AsyncStorage.setItem("@end_exams", JSON.stringify(dataEnds));
  };

  const handleTryAgain = async () => {
    try {
      const newData = JSON.parse(JSON.stringify(selectedQuestionsDetails));
      newData[type][`set${id}`] = {};
      setIndex(0);
      setSelectedQuestions({});
      await AsyncStorage.setItem(
        "@selected_questions_details",
        JSON.stringify(newData)
      );

      const dataEnds =
        JSON.parse(await AsyncStorage.getItem("@end_exams")) || {};
      dataEnds[type][id] = false;
      await AsyncStorage.setItem("@end_exams", JSON.stringify(dataEnds));

      setShowResult(false);
      setShowExplain(false);
      setEnd(false);
    } catch (error) {
      console.log(error);
    }
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
      Alert.alert("Oops!", "Có lỗi xảy ra!");
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
      Alert.alert("Oops!", "Có lỗi xảy ra!");
    }
  };

  useEffect(async () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
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
                  getTheorySet(id: ${id}) {
                    id
                    total
                    questions {
                      items {
                        id
                        set_id
                        content
                        answers {
                          items {
                            id
                            question_id
                            content
                            is_true
                          }
                          nextToken
                        }
                      }
                      nextToken
                    }
                  }
                }`,
        authMode: "API_KEY",
      });

      const res = data.getTheorySet.questions.items;
      setQuestions(res);
      // console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      Alert.alert("Oops!", "Có lỗi xảy ra!");
    }
  };

  const styleAnswerText = (answer) => {
    if (
      showResult &&
      `answer${answer.id}` === (selectedQuestions[index] || value)
    ) {
      if (answer.is_true) return styles.answerCorrect;
      return styles.answerInCorrect;
    }
    return styles.answerText;
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
        <Clock innerRef={clockRef} />
        <Text style={styles.headerText}>Đề số {id}</Text>
        <TouchableHighlight style={styles.endBtn}>
          {end ? (
            <Text style={{ color: "#fff" }} onPress={handleTryAgain}>
              Làm lại
            </Text>
          ) : (
            <>
              {index === questions.length - 1 ? (
                <Text style={styles.endBtnText} onPress={handleEnd}>
                  Kết thúc
                </Text>
              ) : (
                <Text style={styles.endBtnText} onPress={handleNextQuestion}>
                  Câu sau
                </Text>
              )}
            </>
          )}
        </TouchableHighlight>
      </View>

      <ScrollView ref={scrollRef}>
        <View style={styles.questionWrapper}>
          <Text style={styles.question}>
            Câu {index + 1}: {questions[index]?.content}
          </Text>
        </View>

        {questions[index]?.image ? (
          <Image
            source={{ uri: questions[index].image }}
            style={styles.questionImage}
            resizeMode={"contain"}
          />
        ) : (
          <Text style={{ height: 0 }}></Text>
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
                    <Text style={styleAnswerText(answer)}>
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

        {showExplain && (
          <View style={styles.explain}>
            <Text style={styles.correct}>
              Đáp án đúng: {getAnswerOrder(questions[index].answers?.items)}
            </Text>
            <View style={styles.explainHeading}>
              <Image
                source={require("../../assets/message.png")}
                style={styles.explainIcon}
              />
              <Text style={styles.explainHeadingText}>GIẢI THÍCH</Text>
            </View>
            <Text style={styles.explainContent}>
              {questions[index]?.explain || ""}
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerBtn}
          onPress={() => {
            navigation.navigate("Chọn câu hỏi", {
              current: index + 1,
              total: questions.length,
              setIndex: setIndex,
              selectedQuestions: selectedQuestions,
              questions: questions,
              showResult: showResult,
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
    paddingBottom: 60,
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
  questionWrapper: { borderBottomColor: "#E5E5E5", borderBottomWidth: 1 },
  question: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
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
  answerCorrect: {
    fontSize: 14,
    lineHeight: 18,
    alignItems: "center",
    color: "#099D18",
    marginLeft: 8,
    flex: 1,
  },
  answerInCorrect: {
    fontSize: 14,
    lineHeight: 18,
    alignItems: "center",
    color: "red",
    marginLeft: 8,
    flex: 1,
  },
  explain: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  explainHeading: {
    diplay: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  explainIcon: {
    width: 20,
    height: 20,
  },
  explainHeadingText: {
    marginLeft: 6,
    fontWeight: "500",
  },
  explainContent: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    backgroundColor: "#A5D6A7",
  },
  correct: {
    marginBottom: 8,
    fontWeight: "500",
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

export default CauHoiLT;
