// screens/Screen_1.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const imageSource = require('../assets/DATA/Container 17.png'); 

const Screen_1 = () => {
    const navigation = useNavigation(); // Khai báo hook useNavigation
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
      </View>

      <View style={styles.imageContainer}>
        {/* Sử dụng hình ảnh từ local */}
        <Image
          style={styles.image}
          source={imageSource}
        />
      </View>

      <Text style={styles.title}>Boost Productivity</Text>
      <Text style={styles.subtitle}>Simplify tasks, boost productivity</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen_2')}>
        {/* Sử dụng navigation.navigate để điều hướng */}
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Screen_3')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
 
  imageContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    right: 60,
    fontWeight: 'bold',
    color: '#333',

  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    right: 50,
    
  },
  button: {
    backgroundColor: '#00C4B4',
    padding: 15,
    borderRadius: 8,
    paddingLeft:140,
    paddingRight:140,

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#00C4B4',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#00C4B4',
  },
});

export default Screen_1;
