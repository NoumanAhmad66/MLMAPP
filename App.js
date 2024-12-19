// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';
import { StatusBar } from 'react-native';

import PlanDetailsScreen from './screens/PlanDetailsScreen';
import Deposit from './screens/Deposit';
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    ExtraLight: require("./assets/fonts/Lato-Black.ttf"),
    Light: require("./assets/fonts/Lato-BlackItalic.ttf"),
    Regular: require("./assets/fonts/Lato-Bold.ttf"),
    Medium: require("./assets/fonts/Lato-BoldItalic.ttf"),
    SemiBold: require("./assets/fonts/Lato-Italic.ttf"),
    Bold: require("./assets/fonts/Lato-Light.ttf"),
    ExtraBold: require("./assets/fonts/Lato-LightItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
       <StatusBar
      backgroundColor="#8F1115"
      barStyle="light-content"
    />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name='Deposit'     component={Deposit}   options={{
    title: 'Deposit',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#C5161D',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      fontSize: 22, fontWeight: 'bold', color: '#ffff' },
      headerTitleAlign: 'center', // Center the header title
  }
    
  } />
        <Stack.Screen name='PlanDetailsScreen'     component={PlanDetailsScreen}  
         options={{
          title: 'PlanDetails',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#C5161D',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontSize: 22, fontWeight: 'bold', color: '#ffff' },
            headerTitleAlign: 'center', // Center the header title
        }
          
        } 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
