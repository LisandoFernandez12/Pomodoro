import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Timer from "../components/timer";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { Audio } from "expo-av";

export default Main = () => {
  const colors = ["#F1F500", "#00F5C1", "#F552C7"];
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState(
    "POMODORO" | "SHORT BRAKE" | "BRAKE"
  );
  const [isActive, setIsActive] = useState(false);

  function handleStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/click.mp3")
    );
    await sound.playAsync();
  }
  
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    if(time === 0){
      setIsActive(false)
      setIsWorking(prev =>  !prev)
      setTime(isWorking ? 300: 1500)
    }

    return () => clearInterval(interval);
  }, [isActive, time]);
  

  return (
    <SafeAreaView
      style={[styles.principal, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          marginTop: Platform.OS === "android" && 30,
          paddingHorizontal: 15,
          flex: 1,
        }}
      >
        <Text style={styles.text}>POMODORO</Text>
        <Header
          setTime={setTime}
          setCurrentTime={setCurrentTime}
          currentTime={currentTime}
        />
        <Timer time={time}></Timer>
        <TouchableOpacity onPress={handleStartStop} style={styles.button}>
          <Text style={{ color: "#F5001D" }}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#D214F5",
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#00F960",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
});
