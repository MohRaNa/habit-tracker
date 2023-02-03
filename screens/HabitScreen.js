import * as React from "react";
import * as RN from "react-native";

export default function HabitScreen({ navigation }) {
  return (
    <RN.View>
      <RN.Text>Aqui app</RN.Text>
      <RN.Button title="+" onPress={() => navigation.navigate("AddHabit")} />
    </RN.View>
  );
}
