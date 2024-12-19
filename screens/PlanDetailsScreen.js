// PlanDetailsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const PlanDetailsScreen = () => {
  const navigation = useNavigation();
 

  return (
    <LinearGradient
    colors={['#ead196', '#F3EDC8']}
    style={styles.container}
  >
    <SafeAreaView style={styles.container}>
    <ScrollView  style={styles.ScrollView}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false} >
    
      <View style={styles.card}>
        <View style={styles.header}>
        <Text style={styles.heading}>Gold</Text> 
        </View>
        <View style={styles.borderLine} />
        <Text style={styles.desc}>The Gold plan typically represents a level of service or membership that offers a comprehensive range of features and benefits. It is often associated with premium quality and enhanced services. Customers opting for a Gold plan can expect priority access, exclusive perks, and a superior overall experience.</Text>
        <View style={styles.borderLine} />
        <View style={styles.button}>
        <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Deposit')}>
                  <Text style={styles.heading2}>Buy Plan</Text>
                </TouchableOpacity>
                </View>
      </View>
     
      <View style={styles.card}>
        <View style={styles.header}>
        <Text style={styles.heading}>Silver</Text> 
        </View>
        <View style={styles.borderLine} />
        <Text style={styles.desc}>The Silver plan is a step below Gold but still provides a solid set of features and benefits. It is a balanced choice for those who want more than basic services but may not need all the premium offerings. Silver plans often strike a middle ground, providing value for cost-conscious consumers.</Text>
        <View style={styles.borderLine} />
        <View style={styles.button}>
        <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Deposit')}>
                  <Text style={styles.heading2}>Buy Plan</Text>
                </TouchableOpacity>
                </View>
         
      </View>
    
      <View style={styles.card}>
        <View style={styles.header}>
        <Text style={styles.heading}>Diamond</Text> 
        </View>
        <View style={styles.borderLine} />
        <Text style={styles.desc}>The Diamond plan signifies a top-tier, elite level of service. Customers who choose a Diamond plan can anticipate an unparalleled experience, with luxury features, personalized attention, and exclusive access to premium services. This plan is designed for those who seek the highest quality and are willing to invest accordingly.</Text>
        <View style={styles.borderLine} />
        <View style={styles.button}>
        <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Deposit')}>
                  <Text style={styles.heading2}>Buy Plan</Text>
                </TouchableOpacity>
                </View>
         
      </View>
      
      <View style={styles.card}>
        <View style={styles.header}>
        <Text style={styles.heading}>Platinum</Text> 
        </View>
        <View style={styles.borderLine} />
        <Text style={styles.desc}>The Platinum plan is synonymous with the utmost excellence and luxury. It represents the pinnacle of service levels, offering an array of top-tier amenities, exclusive privileges, and personalized attention. Platinum plans cater to individuals who demand the very best and are willing to invest significantly for a premium experience.</Text>
        <View style={styles.borderLine} />
        <View style={styles.button}>
        <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Deposit')}>
                  <Text style={styles.heading2}>Buy Plan</Text>
                </TouchableOpacity>
                </View>
        </View>
         
      
      
      
    </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent:"center",
    alignItems:"center",
   
    
  },
  ScrollView: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.height,
    padding: 20,
    marginBottom:10,
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
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10, // Adjust as needed
  },
  header: {
   
    justifyContent:"center",
    alignItems:"center",
  },
  
  heading: {
    
    fontSize: 18,
    fontFamily:"Regular",
    marginBottom: 3,
    color: '#333',
    
    
  },
 desc:{
  
  fontSize: 20,

  fontFamily:"SemiBold",
 },
 button: {
   
  justifyContent:"center",
  alignItems:"center",
},
 buyButton: {
  backgroundColor: '#C5161D',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 10,
  justifyContent:"center",
  alignItems:"center",
  width:"50%",
},
 heading2:{
  color:"#ffff",
  fontSize: 18,
    fontFamily:"Regular",

 },
});

export default PlanDetailsScreen;

