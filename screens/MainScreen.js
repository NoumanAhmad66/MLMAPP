import React, { useState } from 'react';
import { View, TouchableOpacity,  StyleSheet, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../component/Home';
import Team from '../component/Team';
import Leaderboard from '../component/Leaderboard';
import { SafeAreaView } from 'react-native-safe-area-context';


// Dummy logo and app name

const HomeScreen = () => (
  <View style={styles.screen}>
   
    <Home />
  </View>
);

const TeamScreen = () => (
  <View style={styles.screen}>
    
    <Team />
  </View>
);

const LeaderboardScreen = () => (
  <View style={styles.screen}>
   
    <Leaderboard />
  </View>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const MainScreen = () => {
 
   
  return (
    
    <SafeAreaView style={styles.container}>
       
      <Stack.Navigator
        screenOptions={{
          
            headerShown:false,
          
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabScreen}
        
        />
      </Stack.Navigator>
      
      
      </SafeAreaView>
  );
};

const MainTabScreen = () => (
  <Tab.Navigator   screenOptions={{
    tabBarStyle: { backgroundColor: '#272727' }, // Set the desired background color
  }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={"#cf014f"} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Team"
      component={TeamScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="people-outline" size={size} color={"#dcbd42"} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Leaderboard"
      component={LeaderboardScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="podium-outline" size={size} color={"#894e94"} />,
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 18,
  },
  notificationIcon: {
    marginRight: 16,
    color: '#ffff',
  },


});

export default MainScreen;
