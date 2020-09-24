import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { AppLoading } from 'expo';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';


import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Roboto_400Regular,
    Oswald_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar backgroundColor="#0073B2" style="light"/>
      <Routes />
    </>
  );
}