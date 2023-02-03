import * as RN from "react-native";
import * as React from "react";

//firebase

export default function AddCalendar({}) {
  //Values Name, Date, Priority(Options), Description

  const [newItem, setNewItem] = React.useState({
    name: "",
    date: "",
    priority: "",
    description: "",
  });

  const onSend = async () => {};

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
          onChangeText={(text) => setNewItem({ ...newItem, date: text })}
        />
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
        <RN.Button
          title="Add"
          //onPress={() => }
        />
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  input: {},
});
