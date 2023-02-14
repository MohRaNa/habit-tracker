import * as React from "react";
import * as RN from "react-native";
import { Calendar } from "react-native-calendars";

//firebase
import { database } from "../src/config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import toDo from "./ListToDo";

export default function CalendarScreen({ navigation }) {
  /*const [ToDoList, setToDoList] = React.useState([]);

  React.useEffect(() => {
    //Setting collection from firebase
    const collectionToDo = collection(database, "ToDoList");
    //Query
    const q = query(collectionToDo, orderBy("createdAt", "desc"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      //Get Values from firebase
      setToDoList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.d ata().name,
          date: doc.data().date,
          priority: doc.data().priority,
          description: doc.data().description,
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return unsuscribe;
  }, []);
  */
  return (
    <RN.View style={styles.container}>
      <Calendar style={styles.calendar} />
      <RN.Text style={styles.text}> Today Habits</RN.Text>
      <RN.Text style={styles.text}> Today </RN.Text>

      <RN.TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => navigation.navigate("AddToDoCal")}
      >
        <RN.Text>+</RN.Text>
      </RN.TouchableOpacity>
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
    paddingTop: 20,
    borderColor: "#000",
    borderRadius: 4,
  },
  buttonAdd: {
    width: 70,
    height: 70,
    borderColor: "rgba(0,0,0,0.2",
    justifyContent: "center",
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
  calendar: {
    top: 10,
    paddingTop: 10,
    left: 20,
    width: 350,
    borderRadius: 10,
    elevation: 4,
  },
});
//     {ToDoList.map((ToDoList) => (<toDo key={ToDoList.id} {...ToDoList} />)))
