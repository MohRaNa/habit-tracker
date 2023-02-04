import * as RN from "react-native";
import * as React from "react";

import { database } from "../../src/config/fb";
import { collection, addDoc } from "firebase/firestore";

export default function AddCalendar({ navigation }) {
  //Values Name, Date, Priority(Options), Description
  const [newItem, setNewItem] = React.useState({
    name: "",
    dwm: "",
    time: "",
    icon: "",
  });

  const onSend = async () => {
    await addDoc(collection(database, "habitList"), newItem);
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
        <RN.Text> Date </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Date"
          onChangeText={(text) => setNewItem({ ...newItem, dwm: text })}
        />
        <RN.Text> Priority </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Time"
          onChangeText={(text) => setNewItem({ ...newItem, time: text })}
        />
        <RN.Text> Description </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Icon"
          onChangeText={(text) => setNewItem({ ...newItem, icon: text })}
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
