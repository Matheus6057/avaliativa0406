import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar telas
import HomeScreen from './screens/HomeScreen';
import SenaiScreen from './screens/SenaiScreen';
import ProfileScreen from './screens/ProfileScreen';
import CursoScreen from './screens/CursoScreen';

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SENAI" component={SenaiScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Curso" component={CursoScreen} />
    </Drawer.Navigator>
  );
}

export default Navigation;