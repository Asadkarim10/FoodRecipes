import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Videorecipes from './Videorecipes';
import Home from './home'

function Home1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Home />
    </View>
  );
}

function VideoRecipess() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Videorecipes />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home1} />
      <Tab.Screen name="Videorecipes" component={VideoRecipess} />
    </Tab.Navigator>
  );
}

export default function Tabbars() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
