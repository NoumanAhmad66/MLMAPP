// MenuOverlayContent.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Logo2 = () =>     <Icon name="person-circle-outline" size={40} color="black" />; 
const MenuOverlayContent = ({ closeModal, navigation }) => (
    <View style={styles.overlayContent}>
    <View style={{ 
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: '#C5161D',
       position: 'absolute',
       borderRadius: 20,
       borderBottomLeftRadius: 0,
       width: 200,
       height: 80,
       borderBottomRightRadius: 0,
       marginBottom: 10, 
       // Set margin here
            }}>
      <Logo2/>
      
  
      </View>
      <View style={{ marginTop: 70, padding:20,  }}>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert('Withdraw Pressed')}>
        <Icon name="cash-outline" size={20} color="#3498db" style={styles.menuIcons} />
        <Text style={styles.menuText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert('Offer Pressed')}>
        <Icon name="pricetag-outline" size={20} color="#3498db" style={styles.menuIcons} />
        <Text style={styles.menuText}>Offer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert('Contact Pressed')}>
        <Icon name="mail-outline" size={20} color="#3498db" style={styles.menuIcons} />
        <Text style={styles.menuText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          // Add your logout logic here
          // For navigation example, navigate to 'Login' screen
          navigation.navigate('Login');
        }}
      >
        <Icon name="log-out-outline" size={20} color="#3498db" style={styles.menuIcons} />
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

const styles = StyleSheet.create({
   
      menuIcons: {
        marginRight: 16,
        color: '#646567',
      },
     
      
     
      menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        
      },
      menuText: {
        marginLeft: 10,
        color: '#3498db',
        fontSize: 16,
      },
});

export default MenuOverlayContent;
