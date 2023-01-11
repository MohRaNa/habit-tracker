import React, { useState } from'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal} from 'react-native';
import {Calendar} from "react-native-calendars";


const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [toDoList, setToDoList, toDoListDate] = useState([
    {name: 'Limpiar la Casa' , key: '1', date: '2022-01-01'},
    {name: 'Comprar' , key: '2', date: '2022-01-01'},
    {name: 'Hacer de Comer' , key: '3', date: '2022-02-02'},
    {name: 'Ver Tele' , key: '4', date: '2022-01-03'},
    {name: 'Encontrar las llaves' , key: '5', date: '2022-01-03'},
  ])
  const [habitList, setHabitList] = useState([
    {name: 'Levantarme de la cama' , key: '1'},
    {name: 'Lavarme los dientes' , key: '2'},
    {name: 'Rasurarme' , key: '3'},
    {name: 'Tomar Agua' , key: '4'},
  ])
  return(
    <View>
      <Modal visible={showModal} animationType="fade">
        <Calendar style={{borderRadius: 10, elevation: 4, margin: 40 }}
        onDayPress={date=> console.log(date)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App
