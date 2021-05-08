
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/home';
import Heartylunch from '../screens/heartylunch';
import Videorecipes from '../screens/Videorecipes'
import WeightLossTips from '../screens/weightLossTips'
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Myrecipes from '../screens/myrecipes'



const Stack = createStackNavigator();
//const Tab = createMaterialBottomTabNavigator();

const screenOptionStyle = {
  headerTransparent: false,
  headerTitle: null,
  headerLeft: null,
};

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};


function MyStack(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="heartylunch" component={Heartylunch} />
        <Stack.Screen name="weightLossTips" component={WeightLossTips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SettingStackNavigator = (navigation) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#ff5603',

        labelStyle: { textTransform: "none", fontSize: 13, fontWeight: "bold" },
        style: {

        },
      }}>
        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}

        />
        <Tab.Screen name="Videorecipes" component={Videorecipes}

          options={{
            tabBarLabel: 'Video Recipes',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="video" color={color} size={size} />
            ),
          }}


        />
        <Tab.Screen name="myrecipes" component={Myrecipes} options={{
          tabBarLabel: 'My Recipes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={size}
            />
          ),
        }} />
        <Tab.Screen name="weightLossTips" component={WeightLossTips} options={{
          tabBarLabel: 'settings',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size}
            />
          )
        }}

        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}



