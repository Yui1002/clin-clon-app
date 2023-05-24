/* eslint-disable react-native/no-inline-styles */
import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
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
      <View style={{backgroundColor: 'pink', flex: 0.2, marginTop: '10%'}}>
        <Text style={{fontSize: 30}}>Clin Clon App</Text>
      </View>
      <View style={{backgroundColor: 'gold', flex: 0.3}}>
        <Button
          title="View Details"
          onPress={() => navigation.navigate('History')}
        />
      </View>
      <View style={{backgroundColor: 'tomato', flex: 0.3}}>
        <Button title="Record Time" onPress={handleTime} />
      </View>
      <View style={{backgroundColor: 'darksalmon', flex: 0.5}}>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

export default Home;
