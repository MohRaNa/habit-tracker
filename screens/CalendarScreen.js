import * as React from "react";
import * as RN from "react-native";

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
          name: doc.data().name,
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
    <RN.View>
      <RN.Text>Aqui app</RN.Text>
      <RN.Button title="+" onPress={() => navigation.navigate("AddToDoCal")} />
    </RN.View>
  );
}
//     {ToDoList.map((ToDoList) => (<toDo key={ToDoList.id} {...ToDoList} />)))
