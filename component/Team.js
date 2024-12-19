import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet,Modal,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MenuOverlayContent from './MenuOverlayContent';
import Header from './Header';
import { navigation } from '@react-navigation/native';
const Team = () => {
  
  const [teamMembers, setTeamMembers] = useState({
    level1: Array(10).fill(null).map((_, index) => ({ id: index + 1, name: `Member ${index + 1}` })),
    level2: Array(20).fill(null).map((_, index) => ({ id: index + 11, name: `Member ${index + 11}` })),
    level3: Array(10).fill(null).map((_, index) => ({ id: index + 31, name: `Member ${index + 31}` })),
  });

  useEffect(() => {
    const updateTeamMembers = () => {
      // Only update members in level 1 and 2, level 3 remains constant
      setTeamMembers((prevMembers) => ({
        ...prevMembers,
        level1: Array(10).fill(null).map((_, index) => ({ id: index + 1, name: `Member ${index + 1}` })),
        level2: Array(20).fill(null).map((_, index) => ({ id: index + 11, name: `Member ${index + 11}` })),
      }));
    };

    const timer = setInterval(updateTeamMembers, 5000);

    return () => clearInterval(timer);
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
    <Header title="Team" openMenu={openMenu} openNotifications={() => alert('Notification Bell Pressed')} />
    <Modal animationType="slide" transparent={true} visible={isMenuVisible}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={closeMenu}>
          <View style={styles.rightOverlayContent}>
            <MenuOverlayContent closeModal={closeMenu} navigation={navigation} />
          </View>
        </TouchableOpacity>
      </Modal>
      </View>
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.levelScrollView}
      >
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>Level 1</Text>
          <ScrollView style={styles.tableScrollView}>
            <View style={styles.tableContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.headerCell}>Member ID</Text>
                <Text style={styles.headerCell}>Member Name</Text>
              </View>
              {teamMembers.level1.map((member) => (
                <View key={member.id} style={styles.dataRow}>
                  <Text style={styles.dataCell}>{member.id}</Text>
                  <Text style={styles.dataCell}>{member.name}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.levelScrollView}
      >
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>Level 2</Text>
          <ScrollView style={styles.tableScrollView}>
            <View style={styles.tableContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.headerCell}>Member ID</Text>
                <Text style={styles.headerCell}>Member Name</Text>
              </View>
              {teamMembers.level2.map((member) => (
                <View key={member.id} style={styles.dataRow}>
                  <Text style={styles.dataCell}>{member.id}</Text>
                  <Text style={styles.dataCell}>{member.name}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.levelScrollView}
      >
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>Level 3</Text>
          <ScrollView style={styles.tableScrollView}>
            <View style={styles.tableContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.headerCell}>Member ID</Text>
                <Text style={styles.headerCell}>Member Name</Text>
              </View>
              {teamMembers.level3.map((member) => (
                <View key={member.id} style={styles.dataRow}>
                  <Text style={styles.dataCell}>{member.id}</Text>
                  <Text style={styles.dataCell}>{member.name}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
   
  },
  header:{
    width:"100%",
    marginTop:20,
  },
  levelScrollView: {
    flexDirection: 'row',
  },
  levelContainer: {
    padding: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: 300,
    height: 205, // Constant width for each card
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tableScrollView: {
    marginTop: 10,
    maxHeight: 150, // Set a maximum height for the internal scroll view
  },
  tableContainer: {
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

export default Team;
