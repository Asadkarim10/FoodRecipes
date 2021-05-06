
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/home';
import Heartylunch from '../screens/heartylunch';
import WeightLossTips from '../screens/weightLossTips' 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

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

 function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="myrecipes" component={Myrecipes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




export default MyStack;



