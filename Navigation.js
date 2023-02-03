import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Entypo";

//screens
import CalendarScreen from "./screens/CalendarScreen";
import HabitScreen from "./screens/HabitScreen";
import TodoScreen from "./screens/TodoScreen";
import AddCalendar from "./screens/Add/AddCalendar";
import AddHabit from "./screens/Add/AddHabit";
import AddToDo from "./screens/Add/AddToDo";

const Tab = createBottomTabNavigator();
const CalendarStack = createNativeStackNavigator();
const HabitStack = createNativeStackNavigator();
const TodoStack = createNativeStackNavigator();

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="CalendarScreen" component={CalendarScreen} />
      <CalendarStack.Screen
        name="AddCalendar"
        component={AddCalendar}
        options={{ presentation: "modal" }}
      />
    </CalendarStack.Navigator>
  );
}
function HabitStackScreen() {
  return (
    <HabitStack.Navigator>
      <HabitStack.Screen name="HabitStkScreen" component={HabitScreen} />
      <HabitStack.Screen
        name="AddHabit"
        component={AddHabit}
        options={{ presentation: "modal" }}
      />
    </HabitStack.Navigator>
  );
}
function TodoStackScreen() {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen name="ToDoStkScreen" component={TodoScreen} />
      <TodoStack.Screen
        name="AddToDo"
        component={AddToDo}
        options={{ presentation: "modal" }}
      />
    </TodoStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="CalendarScreen"
      screenOption={{
        tabBarActiveTinColor: "blue",
      }}
    >
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarStackScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HabitScreen"
        component={HabitStackScreen}
        options={{
          tabBarLabel: "Habit",
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TodoScreen"
        component={TodoStackScreen}
        options={{
          tabBarLabel: "To-Do",
          tabBarIcon: ({ color, size }) => (
            <Icon name="new-message" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
