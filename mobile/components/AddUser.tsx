import {View, Text, TextInput, Button, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {LOCAL_HOST_URL} from '../config.js';
import constant from '../parameters/constant';

const AddUser = ({route}: any) => {
  // const [items, setItems] = useState([
  //   {label: 'Hourly', value: 'hourly'},
  //   {label: 'Daily', value: 'daily'},
  // ]);
  // const [statusOptions, setStatusOptions] = useState([
  //   {label: 'Active', value: 'active'},
  //   {label: 'Inactive', value: 'inactive'},
  // ]);
  const [rateTypeOpen, setRateTypeOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [rate, setRate] = useState(0);
  const [rateType, setRateType] = useState(null);
  const [status, setStatus] = useState(null);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [rateError, setRateError] = useState(false);
  const [rateTypeError, setRateTypeError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const addUser = async () => {
    validateFirstName();
    validateLastName();
    validateUsername();
    validateRate();
    validateRateType();
    validateStatus();

    if (
      firstNameError ||
      lastNameError ||
      usernameError ||
      rateError ||
      rateTypeError ||
      statusError
    ) {
      return;
    }

    try {
      const response = await axios.post(`${LOCAL_HOST_URL}/addUser`, {
        firstName: firstName,
        lastName: lastName,
        username: username,
        rate: rate,
        rateType: rateType,
        status: status,
        updateDate: new Date(),
        ownerEmail: route.params.ownerEmail,
      });
    } catch (err) {
      setIsDuplicate(true);
    } finally {
      setIsDuplicate(false);
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

  const validateStatus = () => {
    status === 'active' || status === 'inactive'
      ? setStatusError(false)
      : setStatusError(true);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.list_user_header}>
        <Text style={styles.list_user_header_text}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>List User</Text>
        <View>
          <FlatList
            data={[
              'First Name',
              'Last Name',
              'Username',
              'Rate',
              'Rate Type',
              'Status',
            ]}
            renderItem={renderItem}
            numColumns={6}
          />
        </View>
      </View>
      <View>
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
              open={rateTypeOpen}
              value={rateType}
              items={constant.rateType}
              setOpen={() => setRateTypeOpen(!rateTypeOpen)}
              setValue={val => setRateType(val)}
              // setItems={item => setItems(item)}
            />
          </View>
          <View style={styles.add_user_sub_container}>
            <Text>status</Text>
            <DropDownPicker
              open={statusOpen}
              value={status}
              items={constant.status}
              setOpen={() => setStatusOpen(!statusOpen)}
              setValue={val => setStatus(val)}
            />
          </View>
        </View>
        <View style={styles.add_user_btn}>
          <Button title="Add" color="#fff" onPress={addUser} />
        </View>
      </View>
      <View>
        {isDuplicate && (
          <Text style={styles.register_error}>This user already exists.</Text>
        )}
      </View>
    </View>
  );
};

export default AddUser;
