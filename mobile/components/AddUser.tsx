import {View, Text, TextInput, Button, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {LOCAL_HOST_URL} from '../config.js';
import constant from '../parameters/constant';

const AddUser = ({route}: any) => {
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(route.params.ownerEmail);
  }, []);

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
      console.log(response.status);
      getUsers(route.params.ownerEmail);
    } catch (err) {
      setIsDuplicate(true);
    } finally {
      setIsDuplicate(false);
    }
  };

  const getUsers = async (ownerEmail: string) => {
    try {
      const response = await axios.get(`${LOCAL_HOST_URL}/users/${ownerEmail}`);
      setUsers(response.data);
    } catch (err) {
      console.log('error in getting users: ', err);
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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>List User</Text>
        {users.length < 1 ? (
          <View>
            <Text>No user found</Text>
          </View>
        ) : (
          <View style={styles.list_user_container}>
            <View style={styles.list_user_previewContainer}>
              <View style={styles.list_user_headerBox}><Text style={styles.list_user_box_text}>first name</Text></View>
              <View style={styles.list_user_headerBox}><Text style={styles.list_user_box_text}>last name</Text></View>
              <View style={styles.list_user_headerBox}><Text style={styles.list_user_box_text}>username</Text></View>
              <View style={[styles.list_user_headerBox, {flexBasis: 2}]}><Text style={styles.list_user_box_text}>rate</Text></View>
              <View style={styles.list_user_headerBox}><Text style={styles.list_user_box_text}>rate type</Text></View>
              <View style={styles.list_user_headerBox}><Text style={styles.list_user_box_text}>status</Text></View>
            </View>
            <View>
              {users.map(user => (
                <View style={styles.list_user_previewContainer}>
                  <View style={styles.list_user_box}><Text style={styles.list_user_box_text}>{user.first_name}</Text></View>
                  <View style={styles.list_user_box}><Text style={styles.list_user_box_text}>{user.last_name}</Text></View>
                  <View style={styles.list_user_box}><Text style={styles.list_user_box_text}>{user.user_name}</Text></View>
                  <View style={[styles.list_user_box, {flexBasis: 2}]}><Text style={styles.list_user_box_text}>{user.rate}</Text></View>
                  <View style={styles.list_user_box}><Text style={styles.list_user_box_text}>{user.rate_type}</Text></View>
                  <View style={styles.list_user_box}><Text style={styles.list_user_box_text}>{user.status}</Text></View>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
      <View>
        <Text style={styles.title}>Add User</Text>
        <View style={styles.add_user_container}>
          <View style={styles.add_user_sub_container}>
            <Text>first name *</Text>
            <TextInput
              style={styles.add_user_name}
              onChangeText={text => setFirstName(text)}
              autoCorrect={false}
            />
          </View>
          <View style={styles.add_user_sub_container}>
            <Text>last name *</Text>
            <TextInput
              style={styles.add_user_name}
              onChangeText={text => setLastName(text)}
              autoCorrect={false}
            />
          </View>
          <View style={styles.add_user_sub_container}>
            <Text>username *</Text>
            <TextInput
              style={styles.add_user_name}
              autoCapitalize="none"
              onChangeText={text => setUsername(text)}
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.add_user_container}>
          <View style={styles.add_user_sub_container}>
            <Text>rate *</Text>
            <TextInput
              style={styles.add_user_name}
              onChangeText={text => setRate(Number(text))}
              autoCorrect={false}
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
