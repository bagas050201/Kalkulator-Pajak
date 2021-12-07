/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React,{useEffect} from 'react';
import Router from './src/config/router';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}
export default App;
