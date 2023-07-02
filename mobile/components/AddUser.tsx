import {View, Text, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {LOCAL_HOST_URL} from '../config.js';

const AddUser = ({route}: any) => {
  const [items, setItems] = useState([
    {label: 'Hourly', value: 'hourly'},
    {label: 'Daily', value: 'daily'},
  ]);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [rate, setRate] = useState(0);
  const [rateType, setRateType] = useState(null);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [rateError, setRateError] = useState(false);
  const [rateTypeError, setRateTypeError] = useState(false);

  const addUser = async () => {
    validateFirstName();
    validateLastName();
    validateUsername();
    validateRate();
    validateRateType();

    if (firstNameError || lastNameError || usernameError || rateError || rateTypeError) {
      return;
    }

    try {
      const response = await axios.post(`${LOCAL_HOST_URL}/addUser`, {
        firstName: firstName,
        lastName: lastName,
        username: username,
        rate: rate,
        rateType: rateType,
        status: 'active',
        updateDate: new Date(),
        ownerEmail: route.params.ownerEmail,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const validateFirstName = () => {
    firstName.length < 1 ? setFirstNameError(true) : setFirstNameError(false);
  };

  const validateLastName = () => {
    lastName.length < 1 ? setLastNameError(true) : setLastNameError(false);
  };

  const validateUsername = () => {
    username.length < 1 ? setUsernameError(true) : setUsernameError(false);
  };

  const validateRate = () => {
    typeof rate !== 'number' ? setRateError(true) : setRateError(false); 
  };

  const validateRateType = () => {
    rateType === 'hourly' || rateType === 'daily'
      ? setRateTypeError(false)
      : setRateTypeError(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <View style={styles.add_user_container}>
        <View style={styles.add_user_sub_container}>
          <Text>first name *</Text>
          <TextInput
            style={styles.add_user_name}
            onChangeText={text => setFirstName(text)}
          />
        </View>
        <View style={styles.add_user_sub_container}>
          <Text>last name *</Text>
          <TextInput
            style={styles.add_user_name}
            onChangeText={text => setLastName(text)}
          />
        </View>
        <View style={styles.add_user_sub_container}>
          <Text>username *</Text>
          <TextInput
            style={styles.add_user_name}
            autoCapitalize="none"
            onChangeText={text => setUsername(text)}
          />
        </View>
      </View>
      <View style={styles.add_user_container}>
        <View style={styles.add_user_sub_container}>
          <Text>rate *</Text>
          <TextInput
            style={styles.add_user_name}
            onChangeText={text => setRate(Number(text))}
          />
        </View>
        <View style={styles.add_user_sub_container}>
          <Text>rate type *</Text>
          <DropDownPicker
            onChangeValue={text => setRateType(text)}
            style={styles.add_user_name}
            open={open}
            value={value}
            items={items}
            setItems={setItems}
            setValue={setValue}
            onPress={() => setOpen(!open)}
          />
        </View>
        <View style={styles.add_user_btn}>
          <Button title="Add" color="#fff" onPress={addUser} />
        </View>
      </View>
    </View>
  );
};

export default AddUser;
