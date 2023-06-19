import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Slide2 from '../component/Slide2';

const Slide1 = () => {
  const [isNavigated, setIsNavigated] = useState(false);

  const handleNext = () => {
    setIsNavigated(true);
  };

  if(isNavigated){
    return(
      <View>
      <Slide2 />
      </View>
    )
  }

  return(
    <View>
    <Image 
    source={require('../assets/icon2.png')}
    style = {styles.img1}
    />
    <Text
    style = {styles.title}
    >
    The Number One Specialist in Fast 
    {'\n'}
    and Flawless Laundry Services
    </Text>
    <TouchableOpacity onPress={handleNext}>
      <Text style={styles.text}>
      Skip
      </Text>
    </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  img1: {
    alignSelf: 'center',
    width: 300,
    height: 200,
    marginTop: 150,
    marginLeft: 20
  },
  title: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 15,
  },
  text: {
    textAlign: 'center',
    marginTop: 100,
    color: '#29446C'
  }
})

export default Slide1;