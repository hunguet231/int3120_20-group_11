import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppConstant } from "../../constants";

const screenHeight = Dimensions.get("window").height;

function LyThuyet({ navigation }) {
  const [sets, setSets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [type, setType] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [endExams, setEndExams] = useState({});

  useEffect(async () => {
    const type = await getTypeExamFromStorage();
    setType(type);
    await fetchSets(type);
  }, []);

  const getEndExamsFromStorage = async (type, sets) => {
    try {
      const dataEnds =
        JSON.parse(await AsyncStorage.getItem("@end_exams")) || {};
      dataEnds[type] = dataEnds[type] || {};

      sets.map((set) => {
        dataEnds[type][set.id] = dataEnds[type][set.id] || "";
      });
      if (dataEnds) {
        setEndExams(dataEnds[type]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedQuestionsFromStorage = async (sets_length, type) => {
    try {
      const data =
        JSON.parse(await AsyncStorage.getItem("@selected_questions_details")) ||
        {};

      let choosen = [];
      for (let i = 1; i <= sets_length; ++i) {
        choosen.push(Object.keys(data[type]?.[`set${i}`] || {}).length);
      }
      setSelectedQuestions(choosen);
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "Có lỗi xảy ra!");
    }
  };

  const getTypeExamFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("@type_exam");
      if (data !== null) {
        return data;
      } else return "A1";
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "Có lỗi xảy ra!");
    }
  };

  const fetchSets = async (type) => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: `query {
                  listTheorySets {
                    items {
                      id
                      name
                      total
                      description
                    }
                    nextToken
                  }
                }
              `,
        authMode: "API_KEY",
      });
      const res = data.listTheorySets.items;
      res.sort((a, b) => a.id - b.id);

      setSets(res);
      await getSelectedQuestionsFromStorage(res.length, type);
      await getEndExamsFromStorage(type, res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      Alert.alert("Oops!", "Có lỗi xảy ra!");
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
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.main}>
          {sets.length ? (
            sets.map((set, index) => (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                key={set.id}
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Ôn lý thuyết", {
                    id: set.id,
                    type,
                    isEnd: endExams[set.id],
                  });
                }}
              >
                <View>
                  <View style={styles.optionBox}>
                    <Image
                      source={require(`../../assets/ly-thuyet/lt-x.png`)}
                      style={styles.image}
                    />
                    <View style={styles.text}>
                      <Text style={styles.heading}>{set.name}</Text>
                      <Text style={styles.subHeading}>{set.description}</Text>
                      <View style={styles.bar}>
                        <View style={styles.processBar}>
                          <View style={styles.goal} />
                          <View
                            style={[
                              styles.current,
                              {
                                width:
                                  (selectedQuestions[index] *
                                    styles.goal.width) /
                                  set.total,
                              },
                            ]}
                          />
                        </View>
                        <Text style={styles.process}>
                          {`${selectedQuestions[index]}/${set.total}`}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            ))
          ) : (
            <Text style={{ margin: 15, fontSize: 14 }}>
              Không có đề thi nào!
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    minHeight: screenHeight - 64,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  optionBox: {
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    width: "100%",
    height: 100,
    borderRadius: 8,
    shadowColor: "rgb(149, 157, 165)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    elevation: 4,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  image: {
    height: 98,
    width: 100,
    marginRight: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  heading: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
  subHeading: {
    color: "#7B7878",
    marginTop: 2,
  },
  loading: {
    marginTop: 10,
  },
  container1: {
    width: 70,
    height: 50,
    position: "absolute",
  },
  containerBox1: {
    width: 70,
    height: 48,
    backgroundColor: "rgb(239, 239, 239)",
    position: "relative",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  containerBox1Content: {
    width: 50,
    height: 26,
    position: "absolute",
    transform: [{ translateX: 12 }, { translateY: 12 }],
    color: "rgb(0, 0, 0)",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
  },
  bar: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  process: {
    color: "rgb(0, 0, 0)",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "center",
  },
  processBar: {
    width: 150,
    height: 13,
    marginRight: 8,
  },
  goal: {
    width: 150,
    height: 13,
    backgroundColor: "rgb(217, 230, 234)",
    position: "absolute",
    borderRadius: 10,
  },
  current: {
    height: 13,
    backgroundColor: "rgb(128, 128, 128)",
    position: "absolute",
    borderRadius: 10,
  },
  footer: {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 0,
    alignItems: "center",
  },
  footerBtn: {
    backgroundColor: "#1890FF",
    width: 280,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  footerBtnText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#FFFFFF",
  },
});

export default LyThuyet;
