import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,  StyleSheet, Image, ScrollView, Pressable, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../component/Card';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type_service, setType_service] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.0.9:2000/cust');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.log('Failed to fetch customer data');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:2000/cust/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        const updatedDataList = data.map((item) => {
          if (item.id === id) {
            return { ...item, ...updatedData };
          }
          return item;
        });
        setData(updatedDataList);
      } else {
        console.log('Error updating data');
      }
    } catch (error) {
      console.log('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/cust/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedDataList = data.filter((item) => item.id !== id);
        setData(updatedDataList);
      } else {
        console.log('Error deleting data');
      }
    } catch (error) {
      console.log('Error deleting data:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:2000/cust', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address,
          type_service,
          note
        }),
      });
      if (response.ok) {
        fetchData();
        setName('');
        setAddress('');
        setType_service('');
        setNote('');
      } else {
        console.log('Error submitting data');
      }
    } catch (error) {
      console.log('Error submitting data:', error);
    }
  };

  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#A4BABB' }}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}/>
      <Text style={styles.title}>
        Welcome!
      </Text>
      <Text style={styles.text}>
        Nora Laundry is #1 Laundry Specialist!
      </Text>
      <View
      style={styles.box1}>
      <Text style={styles.box1Title}>Choose our Laundry Service!</Text>
 
        <View style={styles.service}>
          <View style={styles.priceBox}>
            <View style={styles.up}>
              <Text style={styles.upText}>2 Days Laundry Service</Text>
            </View>
            <Text style={styles.price}>Rp 35.000</Text>
            <Text style={styles.kg}>/ per Kg</Text>
            <Text style={styles.minimum}>Only 3 Kg Minimum Order</Text>
          </View>
          <Image 
          source={require('../assets/time.jpg')}
          style={styles.timeIcon}
          />
          <Text style={styles.timeText}>Next Day Delivery</Text>
          <Image 
          source={require('../assets/basket.jpg')}
          style={styles.basketIcon}
          />
          <Text style={styles.basketText}>Free Pickup & Delivery</Text>
        </View>

        <View style={styles.service}>
          <LinearGradient
          colors={['#45789D', '#629CB1', '#8FD2D4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.priceBox2}
          >
           <View style={styles.up2}>
              <Text style={styles.upText2}>Sameday Express Service</Text>
            </View>
            <Text style={styles.price2}>Rp 50.000</Text>
            <Text style={styles.kg2}>/ per Kg</Text>
            <Text style={styles.minimum2}>Only 3 Kg Minimum Order</Text>
          
          <Image 
          source={require('../assets/time2.jpg')}
          style={styles.timeIcon2}
          />
          <Text style={styles.timeText2}>5 Hours Turnaround Time</Text>
          <Image 
          source={require('../assets/basket2.jpg')}
          style={styles.basketIcon2}
          />
          <Text style={styles.basketText2}>Free Pickup & Delivery</Text>
        </LinearGradient>
        </View>
        
        <Text style={styles.formTitle}>Order Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Type of Service"
        value={type_service}
        onChangeText={(text) => setType_service(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Note"
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      
      <Pressable style={styles.button} onPress={handleSubmit}>
      <Text style={styles.btnText}>Submit</Text>
      </Pressable>

      <Text style={styles.boxTitle}>Order List</Text>
      {data.length > 0 ? (
        data.map((item) => (
          <Card
            key={item.id}
            data={item}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <Text>No data available</Text>
      )}

      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
    marginTop: 50,
    marginLeft: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 30,
    marginTop: 20
  },
  text: {
    marginLeft: 30
  },
  box1: {
    backgroundColor: 'white',
    borderRadius: 40,
    width: 'auto',
    height: '82%',
    marginTop: 10
  },
  box1Title: {
    color: '#29446C',
    marginLeft: 30,
    marginTop: 20,
    fontWeight: 600
  },
  boxTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color: '#29446C',
    fontWeight: 600
  },
  img: {
    alignSelf: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#F1FAEE',
    borderRadius: 5
  },
  formTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
    color: '#29446C',
    fontWeight: 600
  },
  button: {
    width: 70,
    padding: 10,
    backgroundColor: '#1D3557',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10
  },
  btnText: {
    color: 'white'
  },
  service: {
    backgroundColor: '#F1FAEE',
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 9,
  },
  priceBox: {
    backgroundColor: '#A8DADC',
    width: 220,
    height: 110,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
    
  },
  priceBox2: {
    width: 220,
    height: 110,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  up: {
    backgroundColor: '#A4BABB',
    borderRadius: 30,
    width: 150,
    padding: 4,
    marginTop: 10,
    marginLeft: 10
  },
  up2: {
    backgroundColor: '#76A8AA',
    borderRadius: 30,
    width: 150,
    padding: 4,
    marginTop: 10,
    marginLeft: 10
  },
  upText: {
    color: '#1D3557',
    fontSize: 12,
    textAlign: 'center'
  },
  upText2: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  },
  price: {
    fontSize: 35,
    fontWeight: 800,
    color: '#1D3557',
    marginLeft: 10
  },
  price2: {
    fontSize: 35,
    fontWeight: 800,
    color: 'white',
    marginLeft: 10
  },
  kg: {
    fontSize: 10,
    marginLeft: 175,
    marginTop: -20
  },
  kg2: {
    fontSize: 10,
    marginLeft: 175,
    marginTop: -20,
    color: 'white'
  },
  minimum: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 10,
    color: '#1D3557'
  },
  minimum2: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 10,
    color: 'white'
  },
  timeIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 20
  },
  timeIcon2: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 30
  },
  timeText: {
    marginLeft: 70,
    marginTop: -25
  },
  timeText2: {
    marginLeft: 50,
    marginTop: -25
  },
  basketIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 20
  },
  basketIcon2: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 20
  },
  basketText: {
    marginLeft: 70,
    marginTop: -25
  },
  basketText2: {
    marginLeft: 50,
    marginTop: -25
  }
});


export default HomePage;
