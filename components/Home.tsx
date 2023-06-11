/* eslint-disable react-native/no-inline-styles */
import {Button, Text, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

type Props = {};

const Home = ({navigation}: any) => {
  const [time, setTime] = useState('');

  // format: 5/18   6:30 am
  const handleTime = () => {
    console.log('record clicked');
    // let currentTime = moment().format('MM/DD  h:mm A');
    let currentTime = new Date();
    storeData(currentTime);
    setTime(moment().format('MM/DD  h:mm A'));
  };

  const storeData = async (currentTime: Date) => {
    const UTCTime = currentTime.toISOString();

    AsyncStorage.getItem('records', (_err, result) => {
      if (result != null) {
        let itemLength = JSON.parse(result).length;
        console.log('item length: ', itemLength);
        let newRecord = JSON.parse(result).concat({
          id: itemLength,
          time: UTCTime,
        });
        // console.log('new Record: ', newRecord);
        AsyncStorage.setItem('records', JSON.stringify(newRecord));
      } else {
        console.log('data is empty');
        AsyncStorage.setItem(
          'records',
          JSON.stringify([{id: 0, time: UTCTime}]),
        );
      }
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 0.2, marginTop: '10%'}}>
        <Text style={{fontSize: 30}}>Clin Clon App</Text>
      </View>
      <View>
        <Text>Current Datetime: {moment().format('MM/DD  h:mm A')}</Text>
      </View>
      <Pressable
        style={styles.viewDetailsBtn}
        onPress={() => navigation.navigate('History')}>
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
