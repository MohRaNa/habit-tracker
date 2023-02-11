import * as React from "react";
import * as RN from "react-native";

export default function TodoScreen({ navigation }) {
  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.text}>Aqui app</RN.Text>
      <RN.TouchableOpacity
        style={styles.buttonAdd}
        title="+"
        onPress={() => navigation.navigate("AddToDo")}
      />
    </RN.View>
  );
}
const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  buttonAdd: {
    width: 70,
    height: 70,
    borderColor: "rgba(0,0,0,0.2",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "orange",
    textTransform: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 10,
    right: 10,
  },
});
