/* eslint-disable react-native/no-inline-styles */
// tsrnf
import {View, Button} from 'react-native';
import React from 'react';

type Props = {};

const View_Details_Button = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title="View details" color="#000" onPress={() => navigation.navigate('History')}/>
    </View>
  );
};

export default View_Details_Button;
