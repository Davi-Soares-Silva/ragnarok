import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/index';
import Details from './pages/details/index';

const Stack = createStackNavigator();

export default class MyStack extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
               />

               <Stack.Screen
                  name="Details"
                  component={Details}
                  options={{ headerShown: false }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      )
   }
}