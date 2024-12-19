// SignupScreen.js
import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referCode, setReferCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Refer Code:', referCode);
    // You can add your signup/authentication logic here
    navigation.replace('Main');
  };

  const LoginScreen = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  return(
    <LinearGradient
    colors={['#ead196', '#F3EDC8']}
    style={styles.container}
  >
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="E-Mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.eyeButton} onPress={toggleShowPassword}>
  <Text>{showPassword ? '👁️' : '👁️'}</Text>
  {showPassword && <View style={styles.eyeLine} />}
</TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
       <TouchableOpacity style={styles.eyeButton} onPress={toggleShowConfirmPassword}>
  <Text>{showConfirmPassword ? '👁️' : '👁️'}</Text>
  {showConfirmPassword && <View style={styles.eyeLine} />}
</TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Refer Code"
        value={referCode}
        onChangeText={(text) => setReferCode(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={LoginScreen}>
        <Text style={styles.alreadyRegistered}>Already Registered? Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ffff',
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius:10,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderColor: '#ffff',
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 8,
    alignItems: 'center',
    borderRadius:10,
  },
  passwordInput: {
    flex: 1,
  },
  eyeButton: {
    padding: 10,
    position: 'relative',
  },
  button: {
    backgroundColor: '#C5161D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '50%',
    borderRadius:10,
  },
  buttonText: {
    color: 'white',
  },
  alreadyRegistered: {
    marginTop: 20,
    color: '#C5161D',
  },
  eyeLine: {
    position: 'absolute',
    width: '100%',
    height: 2,
    marginLeft:10,
    
    backgroundColor: 'black',
    bottom: 18,// Adjust this value to position the line as needed
  },
});

export default SignupScreen;
