import {View, Text, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';

const AddUser = () => {
  const [items, setItems] = useState([
    {label: 'Hourly', value: 'hourly'},
    {label: 'Daily', value: 'daily'},
  ]);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <View style={styles.add_user_container}>
        <View style={styles.add_user_sub_container}>
          <Text>first name</Text>
          <TextInput style={styles.add_user_name} />
        </View>
        <View style={styles.add_user_sub_container}>
          <Text>last name</Text>
          <TextInput style={styles.add_user_name} />
        </View>
        <View style={styles.add_user_sub_container}>
          <Text>username</Text>
          <TextInput style={styles.add_user_name} />
        </View>
      </View>
      <View style={styles.add_user_container}>
        <View style={styles.add_user_sub_container}>
          <Text>rate</Text>
          <TextInput style={styles.add_user_name} />
        </View>
        <View style={styles.add_user_sub_container}>
          <Text>rate type</Text>
          <DropDownPicker
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
          <Button title="Add" color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default AddUser;
