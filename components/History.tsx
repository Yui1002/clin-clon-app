import {View, Button, Text, FlatList, AsyncStorage} from 'react-native';
import React, {useEffect} from 'react';

type Props = {};

const History = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await AsyncStorage.getItem('records');
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <View>
      <FlatList />
    </View>
  );
};

export default History;
