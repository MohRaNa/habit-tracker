import * as RN from "react-native";
import * as React from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

//firebase
import { database } from "../../src/config/fb";
import { collection, addDoc } from "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddToDoCal({ navigation }) {
  //Values Name, Date, Priority(Options), Description
  const [newItem, setNewItem] = React.useState({
    name: "",
    date: new Date(),
    time: new Date().setTime(),
    priority: "",
    description: "",
    createdAt: new Date(),
  });

  const onSend = async () => {
    await addDoc(collection(database, "ToDoList"), newItem);
    navigation.goBack();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn("A date has been picked ", date);
    hideDatePicker();
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
        <RN.Text> Date </RN.Text>
        <TouchableOpacity>
          <DateTimePickerAndroid
            style={{ width: 200 }}
            value={new Date().getDate()}
            dateFormat="day month year"
            minimumDate={new Date().getDate()}
            maximumDate={new Date().getDate() + 365}
            // onChange={(date) => setNewItem({ ...newItem, date: date })}
          />
        </TouchableOpacity>
        <RN.Text> Priority </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Priority"
          onChangeText={(text) => setNewItem({ ...newItem, priority: text })}
        />
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
