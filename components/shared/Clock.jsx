import React from "react";
import Countdown from "react-countdown";
import { Image, Text, View } from "react-native";

const Clock = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Hết giờ</span>;
    } else {
      return (
        <span>
          {`${minutes < 10 ? `0${minutes}` : minutes}`}:
          {`${seconds < 10 ? `0${seconds}` : seconds}`}
        </span>
      );
    }
  };

  return (
    <View style={styles.clock}>
      <Image source={require("../../assets/clock.png")} style={styles.image} />
      <Text style={styles.clockTime}>
        <Countdown date={Date.now() + 20 * 60 * 1000} renderer={renderer} />
      </Text>
    </View>
  );
};

const styles = {
  clock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 20,
    height: 20,
  },
  clockTime: {
    marginLeft: 3,
  },
};

export default React.memo(Clock);
