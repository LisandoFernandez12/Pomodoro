import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Tabs = (props) => {
  const { Text } = props;
  const options = ["Pomodoro", "Break", "short break"];

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.boton}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  boton: {
    borderWidth: 1,
    borderColor: "orange solid",
    borderRadius: 7,
    padding: 15,
    margin: 7,
    alignItems: "center",
  },
});
