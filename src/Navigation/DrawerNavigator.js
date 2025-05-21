// src/Navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/User/Profile';
import HomeScreen from '../Screens/Homepage';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <Profile {...props} />}
        >
            <Drawer.Screen name="HomeTab" component={TabNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
