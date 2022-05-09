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
} from "react-native";
import { AppConstant } from "../constants";
import { listSets } from "../src/graphql/queries";

const content =
  "Hãy làm nhiều đề sát hạch bên dưới để đánh giá khả năng luyện thi của bạn";

function SatHach({ navigation }) {
  const [sets, setSets] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    await fetchSets();
  }, []);

  const fetchSets = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listSets,
        authMode: "API_KEY",
      });
      const res = data.listSets.items;
      console.log(res[0].questions);
      setSets(res);
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

  sets.sort((a, b) => a.id - b.id);

  const examList = [];
  for (let i = 0; i < sets.length; i++) {
    if (sets[i].type === "A1") {
      examList.push(
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          key={i}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Câu hỏi", { id: sets[i].id });
          }}
        >
          <View>
            <View style={styles.container1}>
              <View style={styles.containerBox1}>
                <Text style={styles.containerBox1Content}>
                  Đề số {sets[i].id}
                </Text>
              </View>
            </View>
            <Text style={styles.process}>
              {sets[i].chosen_number}/{sets[i].total}
            </Text>
            <View style={styles.processBar}>
              <View style={styles.goal} />
              <View
                style={[
                  styles.current,
                  {
                    width:
                      (sets[i].chosen_number * styles.goal.width) /
                      sets[i].total,
                  },
                ]}
              />
            </View>
          </View>
        </TouchableHighlight>
      );
    }
  }

  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.header}>
        <Text style={styles.headerContent}>{content}</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>{examList}</View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerBtn}>
            <View>
              <Text style={styles.footerBtnText}>Chọn đề ngẫu nhiên</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    backgroundColor: "#fff",
    marginTop: 15,
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    lineHeight: 17,
    paddingLeft: 15,
    paddingRight: 15,
  },
  main: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    width: "100%",
    height: 50,
    borderRadius: 8,
    shadowColor: "rgb(149, 157, 165)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    elevation: 4,
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
  process: {
    width: 80,
    height: 26,
    position: "absolute",
    transform: [{ translateX: 74.7755 }, { translateY: 12 }],
    color: "rgb(0, 0, 0)",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
  },
  processBar: {
    width: 150,
    height: 13,
    position: "absolute",
    left: 165,
    top: 20,
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
    transform: [{ translateX: 1 }],
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

export default SatHach;
