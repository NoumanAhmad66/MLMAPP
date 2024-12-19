import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet,Modal,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import MenuOverlayContent from './MenuOverlayContent';
import Header from './Header';
import { navigation } from '@react-navigation/native';

const Leaderboard = () => {
 

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // Simulating user data with added members count
    const userData = [
      { id: 1, name: 'User1', membersAdded: 25 },
      { id: 2, name: 'User2', membersAdded: 30 },
      { id: 3, name: 'User3', membersAdded: 15 },
      { id: 4, name: 'User4', membersAdded: 40 },
      { id: 5, name: 'User5', membersAdded: 20 },
      { id: 6, name: 'User6', membersAdded: 18 },
      { id: 7, name: 'User7', membersAdded: 22 },
      { id: 8, name: 'User8', membersAdded: 35 },
      { id: 9, name: 'User9', membersAdded: 28 },
      { id: 10, name: 'User10', membersAdded: 32 },
    ];

    // Sort users based on membersAdded in descending order
    const sortedUsers = userData.sort((a, b) => b.membersAdded - a.membersAdded);

    setUserList(sortedUsers);
  }, []);
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
    <Header title="Leaderboard" openMenu={openMenu} openNotifications={() => alert('Notification Bell Pressed')} />
    <Modal animationType="slide" transparent={true} visible={isMenuVisible}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={closeMenu}>
          <View style={styles.rightOverlayContent}>
            <MenuOverlayContent closeModal={closeMenu} navigation={navigation} />
          </View>
        </TouchableOpacity>
      </Modal>
      </View>
    <View style={styles.container}>
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>Leaderboard</Text>
        <ScrollView style={styles.tableScrollView}>
          <View style={styles.tableContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>Rank</Text>
              <Text style={styles.headerCell}>User Name</Text>
              <Text style={styles.headerCell}>Members Added</Text>
            </View>
            {userList.map((user, index) => (
              <View key={user.id} style={styles.dataRow}>
                <Text style={styles.dataCell}>{index + 1}</Text>
                <Text style={styles.dataCell}>{user.name}</Text>
                <Text style={styles.dataCell}>{user.membersAdded}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    
  },
  header:{
    width:"100%",
  },
  leaderboardContainer: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    width:360, // Take full width
    
  },
  leaderboardTitle: {
    fontSize: 18,
    fontFamily:"ExtraBold",
    
    marginBottom: 16,
    color: '#cc1420',
  },
  tableScrollView: {
    marginTop: 10,
  },
  tableContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#C5161D',
     
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  dataCell: {
    flex: 1,
    textAlign: 'center',
    color: '#555',
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

export default Leaderboard;
