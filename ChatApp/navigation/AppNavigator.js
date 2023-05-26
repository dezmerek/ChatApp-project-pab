import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatListScreen from "../screens/ChatListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerTitle: '' }}>
            <Tab.Screen name="ChatList" component={ChatListScreen} options={{
                tabBarLabel: 'Czat',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbubble-outline" size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarLabel: 'Ustawienia',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings-outline" size={size} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ChatSettings"
                    component={ChatSettingsScreen}
                    options={{
                        headerTitle: "Ustawienia",
                        headerBackTitle: "Wróć",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;