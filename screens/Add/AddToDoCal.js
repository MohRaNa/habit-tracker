import * as RN from "react-native";
import * as React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
//firebase
import { database } from "../../src/config/fb";
import { collection, addDoc } from "firebase/firestore";

export default function AddToDoCal({ navigation }) {
  //Values Name, Date, Priority(Options), Description
  const [newItem, setNewItem] = React.useState({
    name: "",
    date: new Date(),
    time: "",
    priority: "",
    description: "",
    createdAt: new Date(),
  });
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);
  const [textDate, setTextDate] = React.useState("Empty");
  const [exc, setExc] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShow(Platform.OS === "android");
    setNewItem({ ...newItem, date: currentDate });

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setTextDate(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const checkNullUnd = () => {
    if (
      newItem.name == "" ||
      newItem.date == "" ||
      newItem.priority == "" ||
      newItem.time == ""
    )
      setExc(true);
  };
  //Al presionar el boton Add se enviara todos los datos a la base de datos
  const onSend = async () => {
    //checkNullUnd();
    if (exc === false) {
      await addDoc(collection(database, "ToDoList"), newItem);
      navigation.goBack();
    }
  };

  return (
    <RN.View style={styles.container}>
      <RN.View>
        <RN.Text> Add Calendar </RN.Text>
        <RN.Text> Name </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Name"
          onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        />
        <RN.Text> Priority </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Priority"
          onChangeText={(text) => setNewItem({ ...newItem, priority: text })}
        />
        <RN.Text>Date</RN.Text>
        <RN.Text>{textDate}</RN.Text>
        <RN.Button title="DatePicker" onPress={() => showMode("date")} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={newItem.date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <RN.Text> Description </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Description"
          onChangeText={(text) => setNewItem({ ...newItem, description: text })}
        />
        <RN.Button title="Add" onPress={onSend} />
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  input: {},
});
