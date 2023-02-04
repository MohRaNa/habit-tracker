import * as React from "react";
import * as RN from "react-native";

export default function CalendarScreen({ navigation }) {
  return (
    <RN.View>
      <RN.Text>Aqui app</RN.Text>
      <RN.Button title="+" onPress={() => navigation.navigate("AddCalendar")} />
    </RN.View>
  );
}
