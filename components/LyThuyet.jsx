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
} from "react-native";
import { AppConstant } from "../constants";
import { listSets } from "../src/graphql/queries";

function LyThuyet({ navigation }) {
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

  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.main}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            // key={i}
            style={styles.button}
            // onPress={() => {
            //   navigation.navigate("Câu hỏi", { id: sets[i].id });
            // }}
          >
            <View>
              <View style={styles.optionBox}>
                <Image
                  source={require("../assets/lt-1.png")}
                  style={styles.image}
                />
                <View style={styles.text}>
                  <Text style={styles.heading}>50 câu điểm liệt</Text>
                  <Text style={styles.subHeading}>Gồm 50 câu điểm liệt</Text>
                  <View style={styles.bar}>
                    <View style={styles.processBar}>
                      <View
                        style={[
                          styles.current,
                          {
                            width:
                              // (sets[i].chosen_number * styles.goal.width) /
                              // sets[i].total,
                              100,
                          },
                        ]}
                      />
                    </View>
                    <Text style={styles.process}>0/20</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    minHeight: "calc(100vh - 64px)",
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
    borderRadius: 8,
    shadowColor: "rgb(149, 157, 165)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    elevation: 4,
    flexDirection: "row",
    paddingTop: 10,
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  heading: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  subHeading: {
    color: "#7B7878",
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
