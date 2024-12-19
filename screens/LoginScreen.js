import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add your authentication logic here
    navigation.replace('MainScreen');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot Password clicked');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <LinearGradient
    colors={['#ead196', '#F3EDC8']}
    style={styles.container}
  >
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-Mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signup}>Don't have an account? Sign up</Text>
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
  forgotPassword: {
    marginTop: 10,
    color: '#C5161D',
  },
  signup: {
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

export default LoginScreen;
