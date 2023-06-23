import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordSelected, setPasswordSelected] = useState(false);
  const [OTPSelected, setOTPSelected] = useState(false);

  const onPasswordSelect = () => {
    setPasswordSelected(!passwordSelected);
    OTPSelected ? setOTPSelected(!OTPSelected) : null;
  };

  const onOTPSelect = () => {
    setOTPSelected(!OTPSelected);
    passwordSelected ? setPasswordSelected(!passwordSelected) : null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join</Text>
      <View style={styles.name_container}>
        <View style={styles.name_sub_container}>
          <Text>First Name *</Text>
          <TextInput style={styles.input_name} />
        </View>
        <View style={styles.name_sub_container}>
          <Text>Last Name *</Text>
          <TextInput style={styles.input_name} />
        </View>
      </View>
      <View>
        <View style={styles.email_container}>
          <Text>Email Address *</Text>
          <TextInput style={styles.input_email} />
        </View>
        <View style={styles.authentication_container}>
          <Text>Authenticate using </Text>
          <View style={styles.password_container}>
            <Text>Password </Text>
            <TouchableOpacity onPress={onPasswordSelect}>
              <View style={styles.radioBtn}>
                {passwordSelected ? <View style={styles.selected} /> : null}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.OTP_container}>
            <Text>OTP </Text>
            <TouchableOpacity onPress={onOTPSelect}>
              <View style={styles.radioBtn}>
                {OTPSelected ? <View style={styles.selected} /> : null}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.joinBtn}>
        <Button title="Join" color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name_container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  name_sub_container: {
    width: '50%',
  },
  input_name: {
    height: 40,
    borderWidth: 1,
    width: '90%',
  },
  email_container: {
    marginBottom: 10,
  },
  input_email: {
    height: 40,
    borderWidth: 1,
    width: '90%',
  },
  authentication_container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  password_container: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  OTP_container: {
    display: 'flex',
    flexDirection: 'row',
  },
  radioBtn: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    marginLeft: 4,
    backgroundColor: '#000',
  },
  joinBtn: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2089DC',
  },
});

export default Register;
