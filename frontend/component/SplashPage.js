import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Slide1');
    }, 2000)
  }, [navigation])

  return(
    <View style={styles.container}>
    <Image 
    source={require('../assets/white-logo.png')}
    style={styles.logo}
    />
    <Text style={styles.text}>#1 Laundry Specialist</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29446C'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 300,
    width: 100,
    height: 100
  },
  text: {
    textAlign: 'center',
    color: 'white',
  }
})

export default SplashPage;