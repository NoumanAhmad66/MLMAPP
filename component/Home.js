import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import MenuOverlayContent from './MenuOverlayContent';
import Header from './Header';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const navigation = useNavigation();
  const isPlanActivated = true;
  const balance = 1000;
  const plan = 'Gold Plan';
  const teamMembers = 50;
  const referralCode = 'ABC123';
  const [isMenuVisible, setMenuVisible] = useState(false);
const closeMenu = () => {
  setMenuVisible(false);
};

const openMenu = () => {
  setMenuVisible(true);
};
  return (

    <LinearGradient
    colors={['#ead196', '#F3EDC8']}
    style={styles.container}
  >
    <View style={styles.header}>
    <Header title="Home" openMenu={openMenu} openNotifications={() => alert('Notification Bell Pressed')} />
    <Modal animationType="slide" transparent={true} visible={isMenuVisible}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={closeMenu}>
          <View style={styles.rightOverlayContent}>
            <MenuOverlayContent closeModal={closeMenu} navigation={navigation} />
          </View>
        </TouchableOpacity>
      </Modal>
      </View>
   
    <View style={styles.container}>
      
      {/* First View */}
      <View style={styles.card}>
        <Text style={styles.heading}>Your Balance</Text>
        <Text style={styles.value}>${balance}</Text>
        <View style={styles.borderLine} />
        <Text style={styles.heading}>Your Plan</Text>
        <Text style={styles.value}>{plan}</Text>
        <View style={styles.borderLine} />
        <TouchableOpacity    onPress={() => navigation.navigate('PlanDetailsScreen')} style={styles.button}>
          <Text style={styles.buttonText}>See Plan</Text>
        </TouchableOpacity>
        <View style={styles.borderLine} />
        <Text style={styles.planStatus}>
          Plan Activated: {isPlanActivated ? 'Yes' : 'No'}
        </Text>
      </View>

      {/* Second View */}
      <View style={styles.card}>
        <Text style={styles.heading}>Team Members</Text>
        <View style={styles.iconContainer}>
          <Icon name="users" size={30} color="#555" />
          <Text style={styles.counter}>{teamMembers}</Text>
        </View>
        <View style={styles.borderLine} />
      </View>

      {/* Third View */}
      <View style={styles.card}>
        <Text style={styles.heading}>Your Referral Code</Text>
        <View style={styles.borderLine} />
        <Text style={styles.referralCode}>{referralCode}</Text>
        <View style={styles.borderLine} />
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
  },
  header:{
    width:"100%",
  },
  verticalBorder: {
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    height: '100%',
    marginHorizontal: 10, // Adjust as needed
  },
  
  section: {
    flex: 1,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width:300,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10, // Adjust as needed
  },
  
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  value: {
    fontSize: 20,
    marginBottom: 5,
    color: '#555',
  },
  button: {
    backgroundColor: '#C5161D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  planStatus: {
    fontSize: 14,
    color: 'green',
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 10,
    marginLeft:30,
  },
  referralCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightOverlayContent: {
    position: 'absolute',
    top: 0,
    borderRadius: 20,
    right: 0,
    marginRight: 15,
    marginTop: 20,
    bottom: 0,
    width: 200,
    height: '40%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
});

export default Home;
