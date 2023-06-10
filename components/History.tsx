import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};

export interface RecordsType {
  id: number;
  time: string;
}

const History = () => {
  const [records, setRecords] = useState<RecordsType[] | undefined>(undefined);

  useEffect(() => {
    AsyncStorage.getItem('records', (_err, result) => {
      if (!result) {
        console.log('no records');
      } else {
        console.log(JSON.parse(result));
        console.log(Array.isArray(JSON.parse(result)));
        setRecords(JSON.parse(result));
      }
    });
  }, []);

  const clearHistory = async () => {
    AsyncStorage.clear();
  };

  const item = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      <View style={{width: 50, backgroundColor: 'lightyellow'}}>
        <Text style={{fontSize: 16, textAlign: 'center'}}>
          {item.id}
        </Text>
      </View>
      <View style={{width: 400, backgroundColor: 'lightpink'}}>
        <Text style={{fontSize: 16, textAlign: 'center'}}>
          {new Date(item.time).toLocaleString()}
        </Text>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
      }}>
      <FlatList
        style={styles.table}
        data={records}
        renderItem={item}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clearBtn: {
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
  table: {
    borderBottomColor: 'red',
  },
});

export default History;
