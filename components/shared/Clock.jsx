import React from "react";
import Countdown from "react-countdown";
import { Image, Text, View } from "react-native";

const Clock = ({ isRun, duration = 20 }) => {
  const renderer = ({ _, minutes, seconds, completed }) => {
    if (completed) {
      return <Text>Hết giờ</Text>;
    } else {
      return (
        <Text style={minutes < 1 && styles.clockWarning}>
          {`${minutes < 10 ? `0${minutes}` : minutes}`}:
          {`${seconds < 10 ? `0${seconds}` : seconds}`}
        </Text>
      );
    }
  };

  return (
    <View style={styles.clock}>
      <Image source={require("../../assets/clock.png")} style={styles.image} />
      <Text style={styles.clockTime}>
        <Countdown
          date={Date.now() + duration * 60 * 1000}
          autoStart={isRun}
          renderer={renderer}
        />
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
  clockWarning: {
    color: "red",
  },
};

export default React.memo(Clock);
