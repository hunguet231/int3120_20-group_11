import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { AppConstant } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

function ChonCauHoi({ route, navigation }) {
  const { current, total, selectedQuestions, setIndex, questions, showResult } =
    route.params;

  const questionIndexs = [];
  let defaultColor = "#E4E4E4";

  const isCorrect = (i) => {
    const res = questions[i].answers?.items?.some((answer) => {
      if (answer.is_true && `answer${answer.id}` === selectedQuestions[i]) {
        return true;
      }
      return false;
    });
    return res;
  };

  for (let i = 0; i < total; i++) {
    defaultColor = "#E4E4E4";
    if (selectedQuestions.hasOwnProperty(i)) defaultColor = "#7092FE";
    questionIndexs.push({ index: i, color: defaultColor });
  }

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View>
            <Text style={styles.headerText}>
              Câu {current}/{total}
            </Text>
            <Image
              source={require("../../assets/triangleDown.png")}
              style={styles.headerImg}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatGrid
          style={styles.list}
          itemDimension={60}
          data={questionIndexs}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setIndex(item.index);
                navigation.goBack();
              }}
              style={[styles.questionBox, { backgroundColor: item.color }]}
            >
              <Text style={styles.index}>{item.index + 1}</Text>
              {showResult && (
                <View style={styles.tag}>
                  {isCorrect(item.index) ? (
                    <Ionicons
                      name="md-checkmark-circle"
                      size={22}
                      color="#55efc4"
                      style={{ marginLeft: 1 }}
                    />
                  ) : (
                    <FontAwesome
                      name="times-circle"
                      size={22}
                      color="red"
                      style={{ marginLeft: 1 }}
                    />
                  )}
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  headerBtn: {
    height: "100%",
    width: "100%",
  },
  headerImg: {
    height: 10,
    width: 15,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  headerText: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 15,
    color: "#FFF",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: "auto",
  },
  body: {
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  questionBox: {
    width: 60,
    height: 60,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  tag: {
    position: "absolute",
    width: 22,
    height: 22,
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    minHeight: "100%",
  },
});

export default ChonCauHoi;
