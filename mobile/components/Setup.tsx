import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const Setup = ({navigation}) => {
  const onAddUserPress = () => {
    navigation.navigate('AddUser');
  };

  return (
    <View>
      <View>
        <Button title="Add User" onPress={onAddUserPress} />
        <Button title="Add Activity" />
      </View>
    </View>
  );
};

export default Setup;
