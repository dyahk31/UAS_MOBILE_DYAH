import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HomePage from '../component/HomePage';

const Slide2 = () => {
  const [isNavigated, setIsNavigated] = useState(false);

  const handleNext = () => {
    setIsNavigated(true);
  };

  if(isNavigated){
    return(
      <View>
      <HomePage />
      </View>
    )
  }

  return(
    <View>
    <Image 
    source={require('../assets/time.png')}
    style = {styles.img2}
    />
   <Text
    style = {styles.title}>
    Get Your Laundry Done in No Time!
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
  img2: {
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

export default Slide2;