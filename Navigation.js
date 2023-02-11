import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Entypo";

//Screen Tab / Stack
import CalendarScreen from "./screens/CalendarScreen";
import HabitScreen from "./screens/HabitScreen";
import TodoScreen from "./screens/TodoScreen";

//Screen Stack
import AddHabit from "./screens/Add/AddHabit";
import AddToDo from "./screens/Add/AddToDo";
import AddToDoCal from "./screens/Add/AddToDoCal";

//Navigation Tab
const Tab = createBottomTabNavigator();

//Navigation Stack
const CalendarStack = createNativeStackNavigator();
const HabitStack = createNativeStackNavigator();
const TodoStack = createNativeStackNavigator();

//CalendarStackScreen Navigator
function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="CalendarStkScreen"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <CalendarStack.Screen name="AddToDoCal" component={AddToDoCal} />
    </CalendarStack.Navigator>
  );
}
//HabitStackScreen Navigator
function HabitStackScreen() {
  return (
    <HabitStack.Navigator>
      <HabitStack.Screen
        name="HabitStkScreen"
        component={HabitScreen}
        options={{ headerShown: false }}
      />
      <HabitStack.Screen name="AddHabit" component={AddHabit} />
    </HabitStack.Navigator>
  );
}
function TodoStackScreen() {
  return (
    <TodoStack.Navigator options={{ headerShown: false }}>
      <TodoStack.Screen
        name="ToDoStkScreen"
        component={TodoScreen}
        options={{ headerShown: false }}
      />
      <TodoStack.Screen name="AddToDo" component={AddToDo} />
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
