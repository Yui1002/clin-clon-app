/* eslint-disable react-native/no-inline-styles */
import {Button, Text, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};

const Home = ({navigation}: any) => {
  const [time, setTime] = useState('');

  // useEffect(() => {
  //   removeItemValue('records');
  // }, []);

  // format: 5/18   6:30 am
  const handleTime = () => {
    console.log('record clicked');
    // let currentTime = moment().format('MM/DD  h:mm A');
    let currentTime = new Date();
    storeData(currentTime);
    setTime(moment().format('MM/DD  h:mm A'));
  };

  const storeData = async (currentTime: Date) => {
    // right now, current time is local time
    // convert current time to utc
    const UTCTime = currentTime.toISOString();
    // store as utc
    // AsyncStorage.setItem('records', JSON.stringify(UTCTime));
    // when retrieve, get user's current timezone
    AsyncStorage.getItem('records', (_err, result) => {
      // const record = [currentTime];
      if (result != null) {
        // storage is not empty
        console.log('data found: ', result);
        let newRecord = JSON.parse(result).concat(UTCTime);
        AsyncStorage.setItem('records', JSON.stringify(newRecord));
      } else {
        // storage is empty
        console.log('data not found');
        AsyncStorage.setItem('records', JSON.stringify([UTCTime]));
      }
    });
  };

  const removeItemValue = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 0.2, marginTop: '10%'}}>
        <Text style={{fontSize: 30}}>Clin Clon App</Text>
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
