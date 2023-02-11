import * as RN from "react-native";
import * as React from "react";

import { database } from "../../src/config/fb";
import { collection, addDoc } from "firebase/firestore";

export default function AddHabit({ navigation }) {
  //Values Name, DWM, time, icon
  const [newItem, setNewItem] = React.useState({
    name: "",
    dwm: "",
    time: "",
    icon: "",
    createdAt: Date(),
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
        <RN.Text> DWM </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Date"
          onChangeText={(text) => setNewItem({ ...newItem, dwm: text })}
        />
        <RN.Text> Time </RN.Text>
        <RN.TextInput
          style={styles.input}
          placeholder="Add Time"
          onChangeText={(text) => setNewItem({ ...newItem, time: text })}
        />
        <RN.Text> Icon </RN.Text>
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
