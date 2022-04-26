import * as React from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "./Checkbox";
//import { Checkbox } from 'antd';

const CauHoi = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.clock}>
          <Image source={require("../assets/clock.png")} style={styles.image} />
          <Text style={styles.clockTime}>18 : 54</Text>
        </View>

        <Text style={styles.headerText}>Câu số 1/25</Text>
        <TouchableHighlight style={styles.endBtn}>
          <Text style={styles.endBtnText}>Kết thúc</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.questionView}>
        <Text style={styles.question}>
          Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại
          là gì?
        </Text>
      </View>
      <View style={styles.answerView}>
        <View style={styles.answer}>
          <TouchableHighlight>
            <View>
              <Text style={styles.answerIndex}>1</Text>
              <Text style={styles.answerText}>Phần mặt đường và lề đường.</Text>
              <Checkbox />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.answer}>
          <TouchableHighlight>
            <View>
              <Text style={styles.answerIndex}>2</Text>
              <Text style={styles.answerText}>Phần đường xe chạy.</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.answer}>
          <TouchableHighlight>
            <View>
              <Text style={styles.answerIndex}>3</Text>
              <Text style={styles.answerText}>Phần đường xe cơ giới.</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View>
          <Checkbox />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn}>
          <View>
            <Image
              source={require("../assets/triangle.png")}
              style={styles.footerImage}
            />
            <Text style={styles.footerText}>Câu 1/25</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  body: {
    height: "100%",
    width: "100%",
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
  },
  clock: {
    position: "absolute",
    height: 24,
    width: 80,
    top: 13,
    left: 15,
    verticalAlign: "middle",
    marginTop: "auto",
    marginBottom: "auto",
  },
  image: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  clockTime: {
    position: "absolute",
    marginLeft: 27,
    lineHeight: 24,
  },
  headerText: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: 90,
    lineHeight: 24,
    textAlign: "center",
    fontSize: 14,
  },
  endBtn: {
    position: "absolute",
    top: 13,
    right: 15,
    backgroundColor: "#B4B4B4",
    borderRadius: 6,
    width: 80,
    height: 24,
    alignItems: "center",
  },
  endBtnText: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  questionView: {
    width: "100%",
    height: 80,
    borderBottomWidth: 2,
    borderColor: "black",
    padding: 15,
    alignItems: "center",
  },
  question: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 18,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  answerView: {},
  answer: {
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  answerIndex: {
    height: 20,
    width: 20,
    marginTop: 15,
    marginLeft: 16,
    backgroundColor: "#E4E4E4",
    textAlign: "center",
    borderRadius: 50,
  },
  answerText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
    alignItems: "center",
    marginLeft: 55,
    marginRight: 45,
    marginTop: 16,
    position: "absolute",
  },
  footer: {
    bottom: 0,
    height: 60,
    width: "100%",
    backgroundColor: "#1890FF",
    position: "absolute",
    alignItems: "center",
    paddingTop: 25,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  footerImage: {
    height: 10,
    width: 15,
  },
  footerText: {
    fontFamily: "Roboto",
    fontStyle: "normal",

    fontSize: 14,
    lineHeight: 15,
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
};

export default CauHoi;
