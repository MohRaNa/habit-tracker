import * as React from "react";
import * as RN from "react-native";

//firebase
import { database } from "../src/config/fb";
import { collection, onSnapshot, orderBy } from "firebase/firestore";

import habit from "./ListToDo";

export default function HabitScreen({ navigation }) {
  return (
    <RN.View>
      <RN.Text>Aqui app</RN.Text>
      <RN.Button title="+" onPress={() => navigation.navigate("AddHabit")} />
    </RN.View>
  );
}
