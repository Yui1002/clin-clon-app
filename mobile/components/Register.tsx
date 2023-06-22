import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordSelected, setPasswordSelected] = useState(false);
  const [OTPSelected, setOTPSelected] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join</Text>
      <View style={styles.view}>
        <View>
          <Text>First Name*</Text>
          <TextInput style={styles.input_name} value="First Name" />
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput style={styles.input_name} value="Last Name" />
        </View>
      </View>
      <View>
        <TextInput style={styles.input_email} value="Email Address" />
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>Authenticate using</Text>
          <Text>Password</Text>
          <View style={styles.radioBtn}>
            {passwordSelected ? (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#000',
                }}
              />
            ) : null}
          </View>
          <Text>OTP</Text>
          <View style={styles.radioBtn}>
            {passwordSelected ? (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#000',
                }}
              />
            ) : null}
          </View>
        </View>
      </View>
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input_name: {
    height: 40,
    width: '40%',
    borderWidth: 1,
  },
  input_email: {
    height: 40,
    width: '80%',
    marginLeft: '10%',
    borderWidth: 1,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  radioBtn: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Register;
