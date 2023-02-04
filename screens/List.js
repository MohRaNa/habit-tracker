import * as React from "react";
import * as RN from "react-native";
import { database } from "../src/config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function habit({
  //Values: Name, DWM, time, icon
  name,
  dwm,
  time,
  icon,
}) {
  return (
    <RN.View>
      <RN.Text>{name}</RN.Text>
      <RN.Text>{dwm}</RN.Text>
      <RN.Text>{time}</RN.Text>
      <RN.Text>{icon}</RN.Text>
    </RN.View>
  );
}
export default function toDo({
    //Vaules: Name, Date, Priority, Description
    name,
    date,
    priority,
    description
})
{
    return(
        <RN.View>
            <RN.Text>{name}</RN.Text>
            <RN.Text>{date}</RN.Text>
            <RN.Text>{priority}</RN.Text>
            <RN.Text>{description}</RN.Text>
        </RN.View>
    )
}
