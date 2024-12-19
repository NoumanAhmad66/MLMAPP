import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('SplashScreen mounted');

    // Use a try-catch block to handle potential errors
    const navigateToLogin = async () => {
      try {
        // Simulate an asynchronous operation (e.g., fetching data, checking authentication)
        // Replace this with your actual logic
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log('Navigating to LoginScreen');
        navigation.replace('Login');
      } catch (error) {
        console.error('Error during navigation:', error);
        // Handle the error (e.g., show an error message to the user)
      }
    };

    // Call the asynchronous function
    navigateToLogin();

    // Cleanup function to clear the timer
    return () => {
      console.log('Clearing timer');
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
