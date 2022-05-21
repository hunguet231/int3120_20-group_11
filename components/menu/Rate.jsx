import * as React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppConstant } from "../../constants";

const Rate = () => {
  const onPress = () => {
    Linking.openURL("market://details?id=com.vietcoder.gplxmaynew");
  };
  return (
    <View style={styles.rate}>
      <View style={styles.footerBtn}>
        <TouchableOpacity style={styles.footerBtn}>
          <View>
            <Text style={styles.footerBtnText} onPress={onPress}>
              Đi tới CHPlay
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    backgroundColor: "#fff",
    height: "100%",
  },
  footer: {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 0,
    alignItems: "center",
  },
  footerBtn: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
    width: 280,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footerBtnText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#FFFFFF",
  },
});

export default Rate;
