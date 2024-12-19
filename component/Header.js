// Header.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, openMenu, openNotifications }) => {
  return (
    <View style={styles.container}>
      <Icon name="person-circle-outline" size={40} color="#ffff" style={{ marginRight: 10 }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={{marginRight:20}} onPress={openNotifications}>
        <Icon name="notifications-outline" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openMenu}>
        <Icon name="menu-outline" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#C5161D',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffff',
  },
  icon: {
    color: '#ffff',
  },
});

export default Header;
