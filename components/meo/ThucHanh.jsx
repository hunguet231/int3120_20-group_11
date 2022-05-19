import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Record from "./Record";

const ThucHanh = () => {
  return (
    <ScrollView>
      <Record title={"Lưu ý khi thi thực hành lái xe máy hạng A1"}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              1. Tránh gặp phải những lỗi loại trực tiếp
            </Text>
            <View>
              <Text style={styles.para}>
                Khi thi sa hình A1, trong trường hợp bạn không thể tự tin về khả
                năng lái xe thì hãy cố gắng chỉ bị trừ điểm chứ không loại trực
                tiếp. Một số lỗi khiến bạn “thi trượt” ngay lập tức gồm:
              </Text>
              <Text style={styles.para}>
                + Lỗi đi ngược vòng số 8 hoặc ra khỏi vòng số 8 quá sớm
              </Text>
              <Text style={styles.para}>
                + 2 bánh xe chệch ra hoàn toàn khỏi vòng số 8
              </Text>
              <Text style={styles.para}>+ Ngã xe, đổ xe, chết máy</Text>
            </View>
          </View>
        </View>
      </Record>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  content: {
    backgroundColor: "#fff",
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontWeight: "600",
    paddingLeft: 15,
    marginBottom: 3,
  },
  para: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default ThucHanh;
