import * as React from "react";
import * as RN from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function HabitScreen({ navigation }) {
  return (
    <RN.View style={styles.container}>
      
      <RN.Text style={styles.text}>Mes</RN.Text>
      <RN.Text style={styles.text}>Dias de la semana</RN.Text>
      <RN.Text style={styles.text}>Desplegar Listas de Habits</RN.Text>
      <RN.TouchableOpacity
        style={styles.buttonAdd}
        text="+"
        onPress={() => navigation.navigate("AddHabit")}
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
