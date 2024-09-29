  import React from 'react';
  import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
  import { useNavigation } from '@react-navigation/native'; // Import useNavigation

  const logoImage = require('../assets/DATA/Image19.png'); // Đường dẫn tới hình ảnh logo

  const Screen_2 = () => {
    const navigation = useNavigation(); // Khai báo useNavigation để điều hướng

    return (
      <View style={styles.container}>
        

        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} 
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

        <Image source={logoImage} style={styles.logo} />

        <Text style={styles.title}>Nice to see you!</Text>
        <Text style={styles.subtitle}>Create your account</Text>

        <TextInput style={styles.input} placeholder="Enter your user name" />
        <TextInput style={styles.input} placeholder="Enter your email address" />
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />

        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.checkboxText}>
            I agree with <Text style={styles.termsText}>Terms & Conditions</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 16,
    },
    time: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    statusIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 60,
    },
    signalIcon: {
      width: 8,
      height: 12,
      backgroundColor: '#000',
      borderRadius: 2,
    },
    wifiIcon: {
      width: 12,
      height: 8,
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 4,
    },
    batteryIcon: {
      width: 12,
      height: 6,
      backgroundColor: '#000',
      borderRadius: 1,
    },
    backButton: {
      alignSelf: 'flex-start',
      marginLeft: 16,
      marginVertical: 20,
    },
    backButtonText: {
      fontSize: 24,
      color: '#333',
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 24,
    },
    input: {
      width: '90%',
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 16,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    checkbox: {
      width: 16,
      height: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 8,
    },
    checkboxText: {
      color: '#666',
    },
    termsText: {
      color: '#00C4B4',
      textDecorationLine: 'underline',
    },
    button: {
      backgroundColor: '#00C4B4',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default Screen_2;
