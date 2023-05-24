import {View, Button, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};

interface RecordData {
  record: string;
}

const History = () => {
  const [records, setRecords] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('records', (_err, result) => {
      if (!result) {
        setRecords('no record');
      } else {
        setRecords(JSON.parse(result));
      }
    });
  }, [records]);

  return (
    <View>
      <FlatList data={records} renderItem={({item}) => <Text>{item}</Text>} />
    </View>
  );
};

export default History;
