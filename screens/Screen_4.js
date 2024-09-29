// screens/Screen_4.js

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Screen_4 = () => {
  const [selectedImage, setSelectedImage] = useState(1); 
  const [selectedSize, setSelectedSize] = useState('M'); 
  const [quantity, setQuantity] = useState(1); 


  const images = [
    require('../assets/DATA/Container7(1).png'),
    require('../assets/DATA/Container7(2).png'),
    require('../assets/DATA/Container7(3).png'),
    require('../assets/DATA/Container7(4).png'),
  ];


  const sizes = ['XS', 'S', 'M', 'L', 'XL'];


  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <View style={styles.container}>
      {}
      <Image source={images[selectedImage]} style={styles.productImage} />

      {}
      <View style={styles.imageSelector}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(index)}>
            <Image source={image} style={[styles.thumbnail, selectedImage === index && styles.selectedThumbnail]} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.price}>$2.99</Text>
      <Text style={styles.deal}>Buy 1 get 1</Text>

      <Text style={styles.productName}>Product name</Text>
      <Text style={styles.productDescription}>Occaecat est deserunt tempor officia</Text>

      {}
      <View style={styles.sizeContainer}>
        <Text style={styles.label}>Size</Text>
        <View style={styles.sizeSelector}>
          {sizes.map(size => (
            <TouchableOpacity key={size} onPress={() => setSelectedSize(size)} style={[styles.sizeOption, selectedSize === size && styles.selectedSize]}>
              <Text style={styles.sizeText}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {}
      <View style={styles.quantityContainer}>
        <Text style={styles.label}>Quantity</Text>
        <View style={styles.quantitySelector}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.total}>Total: ${(2.99 * quantity).toFixed(2)}</Text>

      {}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  imageSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  thumbnail: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedThumbnail: {
    borderColor: '#00C4B4',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00C4B4',
  },
  deal: {
    color: 'red',
    marginBottom: 16,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  sizeContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sizeSelector: {
    flexDirection: 'row',
  },
  sizeOption: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    borderColor: '#ccc',
  },
  selectedSize: {
    backgroundColor: '#00C4B4',
    borderColor: '#00C4B4',
  },
  sizeText: {
    fontSize: 16,
    color: '#333',
  },
  quantityContainer: {
    marginBottom: 16,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    color: '#333',
  },
  quantityValue: {
    marginHorizontal: 20,
    fontSize: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: '#00C4B4',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen_4;
