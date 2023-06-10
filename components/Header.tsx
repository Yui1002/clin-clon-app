/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: 'tomato',
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30}}>Clin Clon App</Text>
    </View>
  );
};

export default Header;
