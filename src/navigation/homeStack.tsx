import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationStrings} from '../utils';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationStrings.homeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
