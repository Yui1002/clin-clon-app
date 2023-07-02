import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';

const Setup = ({navigation}) => {
  const onAddUserPress = () => {
    navigation.navigate('AddUser');
  };

  return (
    <View style={styles.container}>
      <View style={styles.setup_container}>
        <View style={styles.setup_btn}>
          <Button title="Add User" onPress={onAddUserPress} color="#fff" />
        </View>
        <View style={styles.setup_btn}>
          <Button title="Add Activity" color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Setup;
