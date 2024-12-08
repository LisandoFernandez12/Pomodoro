import { Text, View, StyleSheet } from "react-native";

export default Timer = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F",
    padding: 20,
    borderRadius: 20,
    flex: 0.4,
    justifyContent: "center",
  },
  time: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 75,
    color: "#F57E14",
  },
});
