import * as React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function TodoScreen() {
  const navigation = useNavigation();
  return (
    <RN.View>
      <RN.Text>Aqui app</RN.Text>
      <RN.Button title="+" onPress={() => navigation.navigate("AddToDo")} />
    </RN.View>
  );
}
