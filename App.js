/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React from 'react';
import Router from './src/config/router';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}
export default App;
