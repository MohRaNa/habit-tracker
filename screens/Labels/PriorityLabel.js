import * as React from "react";
import * as RN from "react-native";

export default function PriorityLabel() {
  const priorityLabel = [
    { label: "Max", value: "Max" },
    { label: "Mid", value: "Mid" },
    { label: "Min", value: "Min" },
  ];

  const handleSelectChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <select>
        options = {priorityLabel}
        onChange = {}
      </select>
    </div>
  );
}
