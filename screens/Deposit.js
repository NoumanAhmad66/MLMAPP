import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Deposit = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [trxId, setTrxId] = useState('');
  const [depositHistory, setDepositHistory] = useState([]);
  const navigation = useNavigation();


  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={handleGoBack} style={styles.headerLeft}>
          <ImageBackground style={styles.headerLeftImage} source={require('../assets/left-arrow.png')}>
            {/* You can add any content or styles here if needed */}
          </ImageBackground>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Define plan prices
  const planPrices = {
    Gold: 300,
    Silver: 500,
    Diamond: 1000,
    Platinum: 2000,
  };
  const handlePaymentMethodSelect = (value) => {
    setSelectedPaymentMethod(value);
  
    // Auto-set account number based on payment method
    switch (value) {
      case 'JazzCash':
        setAccountNumber('03176677728');
        break;
      case 'Easypaisa':
        setAccountNumber('03648198473');
        break;
      case 'Nayapay':
        setAccountNumber('033277584657');
        break;
      case 'Sadapay':
        setAccountNumber('033277584657');
        break;
      // Add more cases as needed for other payment methods
      default:
        setAccountNumber('');
        break;
    }
  };
    

  const paymentMethods = ['JazzCash', 'Easypaisa', 'Nayapay', 'Sadapay', 'More...'];

  const handlePlanSelect = (value) => {
    setSelectedPlan(value);
    // Update the amount when the plan is selected
    setAmount(planPrices[value].toString());
  };

 

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handleDeposit = () => {
    const newDeposit = {
      plan: selectedPlan,
      paymentMethod: selectedPaymentMethod,
      accountNumber,
      amount,
      trxId,
    };

    setDepositHistory([newDeposit, ...depositHistory]);
    // Additional logic for deposit action
  };

  return (
    <LinearGradient
    colors={['#ead196', '#F3EDC8']}
    style={styles.container}
  >
      <Text style={styles.label}>Select Plan:</Text>
      <ModalDropdown
        options={['Gold', 'Silver', 'Diamond', 'Platinum']}
        defaultValue="Select Plan"
        onSelect={(index, value) => handlePlanSelect(value)}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownMenu}
      />

      {selectedPlan ? (
        <View style={styles.selectedPlanContainer}>
          <Text style={styles.selectedPlanText}>Selected Plan: {selectedPlan}</Text>
          <Text style={styles.selectedPlanAmount}>Amount: {planPrices[selectedPlan]} Rs</Text>
        </View>
      ) : null}

      <Text style={styles.label}>Select Payment Method:</Text>
      <ModalDropdown
        options={paymentMethods}
        defaultValue="Select Payment Method"
        onSelect={(index, value) => handlePaymentMethodSelect(value)}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownMenu}
      />

      {selectedPaymentMethod ? (
        <Text style={styles.selectedPaymentMethodText}>
          Selected Payment Method: {selectedPaymentMethod}
        </Text>
      ) : null}

      <Text style={styles.label}>Account Number:</Text>
      <TextInput
        style={styles.input}
        value={accountNumber}
        onChangeText={(text) => setAccountNumber(text)}
      />

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={(text) => handleAmountChange(text)}
        keyboardType="numeric"
        editable={!selectedPlan} // Allow editing only if no plan is selected
      />

      <Text style={styles.label}>TRX.ID:</Text>
      <TextInput
        style={styles.input}
        value={trxId}
        onChangeText={(text) => setTrxId(text)}
      />

      

<TouchableOpacity    onPress={handleDeposit} style={styles.button}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>

      <Text style={styles.label}>Deposit History:</Text>
      <FlatList
  data={depositHistory}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.historyItem}>
      <Text style={{fontSize:16 , fontWeight:"normal", marginLeft:5,}} >Plan : {item.plan}</Text>
      <Text style={{fontSize:16 , fontWeight:"normal", marginLeft:5,}}>Payment Method : {item.paymentMethod}</Text>
      <Text style={{fontSize:16 , fontWeight:"normal", marginLeft:5,}}>Account Number : {item.accountNumber}</Text>
      <Text style={{fontSize:16 , fontWeight:"normal", marginLeft:5,}}>Amount : {item.amount} Rs</Text>
      <Text style={{fontSize:16 , fontWeight:"normal", marginLeft:5,}}>TRX.ID : {item.trxId}</Text>
    </View>
  )}
/>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color:'black',
  },
  dropdown: {
    borderWidth: 2,
    borderColor: '#ffff',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
    color:'black',
  },
  dropdownMenu: {
    borderWidth: 2,
    borderColor: '#ffff',
    borderRadius: 10,
    height: 120,
    width: 200,
  },
  selectedPlanContainer: {
    marginTop: 10,
  },
  selectedPlanText: {
    fontSize: 16,
    color:'black',
  },
  selectedPlanAmount: {
    fontSize: 16,
    color: 'green',
  },
  selectedPaymentMethodText: {
    fontSize: 16,
    color:'black',
  },
  input: {
    height: 40,
    borderColor: '#ffff',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  buttonText: {
    color: 'white',
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
  historyItem: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius:10,
    borderColor: '#fff',
    paddingBottom: 10,
    backgroundColor:'#ffff',
    
  },
  headerLeft: {
    marginLeft: 16,
  },
  headerLeftImage: {
    width: 30, // Set the width of the image
    height: 30, // Set the height of the image
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Deposit;
