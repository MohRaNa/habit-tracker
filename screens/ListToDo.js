import * as React from "react";
import * as RN from "react-native";
import { database } from "../src/config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function toDo({
  //Vaules: Name, Date, Priority, Description
  name,
  date,
  priority,
  description,
  createdAt,
}) {
  return (
    <RN.View>
      <RN.Text>{name}</RN.Text>
      <RN.Text>{date}</RN.Text>
      <RN.Text>{priority}</RN.Text>
      <RN.Text>{description}</RN.Text>
    </RN.View>
  );
}
