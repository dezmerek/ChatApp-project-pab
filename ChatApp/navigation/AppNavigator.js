import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatListScreen from "../screens/ChatListScreen";
import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {

    const isAuth = false;
    return (
        <NavigationContainer>
            {isAuth && <MainNavigator />}
            {!isAuth && <AuthScreen/>}
        </NavigationContainer>
    );
};

export default AppNavigator;