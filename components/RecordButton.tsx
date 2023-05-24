/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';

type Props = {
  handleTime: React.MouseEventHandler<HTMLButtonElement>;
  time: string;
};

const RecordButton = (props: Props) => {
  const [time, setTime] = useState('');
  const [record, setRecord] = useState([]);
  // format: 5/18   6:30 am
  const handleTime = () => {
    let currentTime = moment().format('MM/DD  h:mm A');
    //   console.log('time: ', currentTime)
    setTime(currentTime);
  };

  return (
    <View
      style={{
        backgroundColor: 'aquamarine',
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title="Record Time" color="#000" onPress={handleTime} />
      <Text>{time}</Text>
    </View>
  );
};

export default RecordButton;
