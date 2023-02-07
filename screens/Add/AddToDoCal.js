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
  const [text, setText] = React.useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    RN.setShow(Platform.OS === "android");
    setNewItem({ ...newItem, date: new Date(currentDate) });

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1);
    setText(fDate);

    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onSend = async () => {
    await addDoc(collection(database, "ToDoList"), newItem);
    navigation.goBack();
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
        <RN.Text>{text}</RN.Text>
        <RN.Button title="DatePicker" onPress={() => showMode("date")} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={newItem.date}
            mode={mode}
            is24Hour="default"
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
