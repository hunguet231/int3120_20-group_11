import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { RadioButton, TouchableRipple } from "react-native-paper";
import { AppConstant } from "../../../constants";
import TypeExamItem from "./TypeExamItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = ({ navigation }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  const getTypeExamFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("@type_exam");
      if (data !== null) {
        setValue(data);
      } else setValue("A1");
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "Có lỗi xảy ra!");
    }
  };

  useEffect(() => {
    getTypeExamFromStorage();
  }, []);

  const handleSaveType = async () => {
    try {
      await AsyncStorage.setItem("@type_exam", value);
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "Có lỗi xảy ra!");
    }
  };

  return (
    <View style={styles.setting}>
      <RadioButton.Group
        style={styles.radioGroup}
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        <TouchableRipple
          onPress={() => handleChange("A1")}
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
              value="A1"
              style={styles.radio}
            />
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => handleChange("A2")}
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
              value="A2"
              style={styles.radio}
            />
          </View>
        </TouchableRipple>
      </RadioButton.Group>
      <TouchableOpacity style={styles.button} onPress={handleSaveType}>
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
