import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logoImage = require('../assets/DATA/Image19.png');

const Screen_2 = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [message, setMessage] = useState('');

  const handleContinue = () => {
    if (!userName || !email || !password) {
      setMessage('Vui lòng nhập tất cả thông tin!');
      return;
    }
    
    if (!isAgreed) {
      setMessage('Vui lòng đồng ý với điều khoản và điều kiện!');
      return;
    }

    setMessage('Đăng ký thành công');
  };

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

      <TextInput 
        style={styles.input} 
        placeholder="Enter your user name" 
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter your email address" 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter your password" 
        secureTextEntry={true} 
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setIsAgreed(!isAgreed)} style={styles.checkbox}>
          {isAgreed && <View style={styles.checkboxChecked} />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I agree with <Text style={styles.termsText}>Terms & Conditions</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Hiển thị thông báo nếu có */}
      {message ? <Text style={styles.successMessage}>{message}</Text> : null}
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
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 14,
    height: 14,
    backgroundColor: '#00C4B4',
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
  successMessage: {
    marginTop: 20,
    fontSize: 16,
    color: '#00C4B4',
    fontWeight: 'bold',
  },
});

export default Screen_2;
