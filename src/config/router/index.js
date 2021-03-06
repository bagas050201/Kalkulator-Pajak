/* eslint-disable prettier/prettier */
import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';
import { Home,PBB,BPHTB,Hotel,Restoran,InfoHotel,InfoBPHTB,InfoPBB} from '../../screen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{title: 'Home'}} name="Home" component={Home} />
      <Stack.Screen options={{title: 'PBB'}} name="PBB" component={PBB} />
      <Stack.Screen options={{title: 'Info PBB'}} name="InfoPBB" component={InfoPBB} />
      <Stack.Screen options={{title: 'BPHTB'}} name="BPHTB" component={BPHTB} />
      <Stack.Screen options={{title: 'Info BPHTB'}} name="InfoBPHTB" component={InfoBPHTB} />
      <Stack.Screen options={{title: 'Hotel'}} name="Hotel" component={Hotel} />
      <Stack.Screen options={{title: 'Info Hotel'}} name="InfoHotel" component={InfoHotel} />
      <Stack.Screen options={{title: 'Restoran'}} name="Restoran" component={Restoran} />
    </Stack.Navigator>
  );
};

export default Router;
