import * as RN from "react-native";
import * as React from "react";
import Select from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-paper";
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

  //DateTimePicker
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);
  const [textDate, setTextDate] = React.useState("Empty");
  const [exc, setExc] = React.useState(false);

  //component onChange for DateTimePicker
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

  //Show DateTimeKiperMode
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  //Checks if newItem has none data"
  const checkNullUnd = () => {
    if (
      newItem.name == "" ||
      newItem.date == "" ||
      newItem.priority == "" ||
      newItem.time == ""
    )
      setExc(true);
  };
  //Send newItem to the Database as a ToDoList entity
  const onSend = async () => {
    checkNullUnd();
    if (exc === false) {
      await addDoc(collection(database, "ToDoList"), newItem);
      navigation.goBack();
    }
  };

  //Options Priority
  const priorityLabel = [
    { label: "Max", value: "Max" },
    { label: "Mid", value: "Mid" },
    { label: "Min", value: "Min" },
  ];

  return (
    <RN.View style={styles.container}>
      <RN.View>
        <RN.Text style={styles.text}> Add To Do </RN.Text>
        <RN.Text style={styles.textDescribe}> Name </RN.Text>
        <TextInput
          style={styles.textInputToDO}
          placeholder="Add Name"
          onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        />
        <RN.Text style={styles.textDescribe}> Priority </RN.Text>
        <Select
          style={styles.textInputToDO}
          onValueChange={(text) => setNewItem({ ...newItem, priority: text })}
          items={priorityLabel}
        />
        <RN.Text style={styles.textDescribe}>Date</RN.Text>
        <RN.Text style={styles.textInputToDO}>{textDate}</RN.Text>
        <RN.Button
          style={styles.buttonDate}
          title="DatePicker"
          onPress={() => showMode("date")}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={newItem.date}
            mode={mode}
            display="default"
            onChange={onChange}
          />
        )}
        <RN.Text style={styles.textDescribe}> Description </RN.Text>
        <TextInput
          style={styles.textInputToDO}
          placeholder="Add Description"
          onChangeText={(text) => setNewItem({ ...newItem, description: text })}
        />
        <RN.Button style={styles.buttonAdd} onPress={onSend} title="ADD" />
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  textDescribe: {
    paddingTop: 10,
  },
  textInputToDO: {
    marginTop: 20,
  },
  buttonDate: {
    maginTop: 20,
  },
  buttonAdd: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});
