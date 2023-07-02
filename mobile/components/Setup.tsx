import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';

const Setup = ({navigation, route}: any) => {
  const { ownerEmail } = route.params;
  // console.log('props: ', ownerEmail);
  // console.log('props2: ', route.params)
  // const [state, setState] = useState(navigation.navigation)
  const onAddUserPress = () => {
    navigation.navigate('AddUser', {ownerEmail: route.params.ownerEmail});
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
