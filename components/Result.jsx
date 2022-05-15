import React from "react";
import { Text, View } from "react-native";

const Result = ({ route, navigation }) => {
  const { correct, total } = route.params;

  return (
    <Text>
      Result: {correct}/{total}
    </Text>
  );
};

export default Result;
