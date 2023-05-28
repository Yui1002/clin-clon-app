/* eslint-disable react-native/no-inline-styles */
import {Button, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};

const Home = ({navigation}: any) => {
  const [time, setTime] = useState('');

  // format: 5/18   6:30 am
  const handleTime = () => {
    console.log('record clicked');
    let currentTime = moment().format('MM/DD  h:mm A');
    storeData(currentTime);
    setTime(currentTime);
  };

  const storeData = async (currentTime: string) => {
    console.log('currentTime: ', currentTime);
    AsyncStorage.getItem('records', (_err, result) => {
      const record = [currentTime];
      if (result != null) {
        console.log('data found: ', result);
        let newRecord = JSON.parse(result).concat(currentTime);
        AsyncStorage.setItem('records', JSON.stringify(newRecord));
      } else {
        console.log('data not found');
        AsyncStorage.setItem('records', JSON.stringify(record));
      }
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 0.2, marginTop: '10%'}}>
        <Text style={{fontSize: 30}}>Clin Clon App</Text>
      </View>
      <Pressable style={styles.viewDetailsBtn} onPress={() => navigation.navigate('History')}>
        <Text>View Details</Text>
      </Pressable>
      <Pressable style={styles.recordTimeBtn} onPress={handleTime}>
        <Text>Record Time</Text>
      </Pressable>
      <View style={{flex: 0.5}}>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewDetailsBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: '#fff',
    backgroundColor: '#2196F3',
    marginBottom: 30,
  },
  recordTimeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: '#fff',
    backgroundColor: '#a4c936',
    marginBottom: 20,
  },
});

export default Home;
