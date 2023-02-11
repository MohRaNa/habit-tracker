import * as RN from "react-native";
import * as React from "react";
import { TextInput } from "react-native-paper";

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
        <RN.Text style={styles.text}> Habit Name</RN.Text>
        <RN.Text> Name </RN.Text>
        <TextInput
          style={styles.input}
          placeholder="Add Name"
          onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        />
        <RN.Text> DWM </RN.Text>
        <TextInput
          style={styles.input}
          placeholder="Add Date"
          onChangeText={(text) => setNewItem({ ...newItem, dwm: text })}
        />
        <RN.Text> Time </RN.Text>
        <TextInput
          style={styles.input}
          placeholder="Add Time"
          onChangeText={(text) => setNewItem({ ...newItem, time: text })}
        />
        <RN.Text> Icon </RN.Text>
        <TextInput
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
