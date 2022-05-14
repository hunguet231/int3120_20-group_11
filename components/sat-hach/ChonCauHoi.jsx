import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppConstant } from "../../constants";

function ChonCauHoi({ route, navigation }) {
  const { current, total, setIndex, selectedQuestions } = route.params;

  const questionIndexs = [];
  let defaultColor = "#E4E4E4";

  for (let i = 0; i < total; i++) {
    defaultColor = "#E4E4E4";
    if (selectedQuestions.hasOwnProperty(i)) defaultColor = "#7092FE";
    questionIndexs.push(
      <View
        key={i}
        style={[styles.questionBox, { backgroundColor: defaultColor }]}
      >
        <Text
          // style={styles.index}
          onPress={() => {
            setIndex(i);
            navigation.goBack();
          }}
        >
          {i + 1}
        </Text>
      </View>
    );
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
        <View style={styles.body}>{questionIndexs}</View>
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
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 4,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
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
    marginLeft: 5,
  },
});

export default ChonCauHoi;
