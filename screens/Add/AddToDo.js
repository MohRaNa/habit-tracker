import * as RN from "react-native";
import * as React from "react";

export default function AddToDo() {
  return (
    <RN.View style={StyleSheet.container}>
      <RN.Text>Add</RN.Text>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alightItems: "center",
  },
});
