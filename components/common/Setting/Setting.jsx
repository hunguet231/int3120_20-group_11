import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RadioButton, TouchableRipple } from "react-native-paper";
import { AppConstant } from "../../../constants";
import TypeExamItem from "./TypeExamItem";

const Setting = () => {
  const [value, setValue] = React.useState("first");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <View style={styles.setting}>
      <RadioButton.Group
        style={styles.radioGroup}
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        <TouchableRipple
          onPress={() => handleChange("first")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <View style={styles.item}>
            <TypeExamItem
              style={styles.text}
              title="BẰNG A1 (200 CÂU HỎI)"
              desc="Xe mô tô 2 bánh có dung tích xy lanh dưới 175 cm3"
            />
            <RadioButton.Android
              color={AppConstant.DEFAULT_APP_COLOR}
              value="first"
              style={styles.radio}
            />
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => handleChange("second")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <View style={styles.item}>
            <TypeExamItem
              style={styles.text}
              title="BẰNG A2 (450 CÂU HỎI)"
              desc="Xe mô tô 2 bánh có dung tích xy lanh trên 175 cm3"
            />
            <RadioButton.Android
              color={AppConstant.DEFAULT_APP_COLOR}
              value="second"
              style={styles.radio}
            />
          </View>
        </TouchableRipple>
      </RadioButton.Group>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    backgroundColor: "#fff",
    height: "100%",
  },
  button: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 25,
    minWidth: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  item: {
    flexDirection: "row",
    width: "100%",
    paddingRight: 10,
    alignItems: "center",
  },
  radio: {
    flex: 1,
  },
});

export default Setting;
