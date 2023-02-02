import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";

//screens
import CalendarScreen from "./screens/CalendarScreen";
import HabitScreen from "./screens/HabitScreen";
import TodoScreen from "./screens/TodoScreen";

const Tab = createBottomTabNavigator();

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
        component={CalendarScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HabitScreen"
        component={HabitScreen}
        options={{
          tabBarLabel: "Habit",
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TodoScreen"
        component={TodoScreen}
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
