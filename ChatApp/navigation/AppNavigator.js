import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatListScreen from "../screens/ChatListScreen";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;