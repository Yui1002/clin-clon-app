import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import {LOCAL_HOST_URL} from '../config.js';
import validator from 'validator';

const rules = [
  {label: 'One uppercase', pattern: new RegExp(/.*[A-Z]/)},
  {label: 'One number', pattern: new RegExp(/.*\d/)},
  {label: 'Min 8 characters', pattern: new RegExp(/.{8,}$/)},
  {
    label: 'One special char',
    pattern: new RegExp(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/),
  },
];

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordSelected, setPasswordSelected] = useState(false);
  const [OTPSelected, setOTPSelected] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [selectError, setSelectError] = useState(false);

  useEffect(() => {
    validateFirstName();
  }, [firstName]);

  useEffect(() => {
    validateLastName();
  }, [lastName]);

  useEffect(() => {
    validateEmail();
  }, [email]);

  useEffect(() => {
    validatePassword();
  }, [password]);

  useEffect(() => {
    validateSelect();
  }, [passwordSelected, OTPSelected]);

  const onFirstNameChange = (name: string) => {
    setFirstName(name);
    validateFirstName();
  };

  const onLastNameChange = (name: string) => {
    setLastName(name);
    validateLastName();
  };

  const onEmailChange = (email: string) => {
    setEmail(email);
    validateEmail();
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
    validatePassword();
  };

  const onPasswordSelect = () => {
    setPasswordSelected(!passwordSelected);
    OTPSelected ? setOTPSelected(!OTPSelected) : null;
    validateSelect();
  };

  const onOTPSelect = () => {
    setOTPSelected(!OTPSelected);
    passwordSelected ? setPasswordSelected(!passwordSelected) : null;
    validateSelect();
  };

  const onSubmit = () => {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();

    console.log('first name error: ', firstNameError);
    console.log('last name error: ', lastNameError);
    console.log('email error: ', emailError);
    console.log('password error: ', passwordError);

    if (firstNameError || lastNameError || emailError || passwordError) {
      return;
    }

    // const authStyle = passwordSelected ? 'password' : 'OTP';
    axios
      .post(`${LOCAL_HOST_URL}/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        status: 'active',
        password: password,
        // authStyle: authStyle,
        createDate: new Date(),
      })
      .then(res => console.log('data: ', res.data))
      .catch(e => console.log('e: ', e))
      .finally(() => {
        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
        setPasswordError(false);
        setSelectError(false);
      });
  };

  const validateFirstName = () => {
    firstName.length < 1 ? setFirstNameError(true) : setFirstNameError(false);
  };

  const validateLastName = () => {
    lastName.length < 1 ? setLastNameError(true) : setLastNameError(false);
  };

  const validateEmail = () => {
    !validator.isEmail(email) ? setEmailError(true) : setEmailError(false);
  };

  const validateSelect = () => {
    !passwordSelected && !OTPSelected
      ? setSelectError(true)
      : setSelectError(false);
  };

  const validatePassword = () => {
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
      ? setPasswordError(true)
      : setPasswordError(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join</Text>
      <View style={styles.name_container}>
        <View style={styles.name_sub_container}>
          <Text>First Name *</Text>
          <TextInput
            style={styles.input_name}
            onChangeText={text => onFirstNameChange(text)}
          />
          {firstNameError && (
            <Text style={styles.form_input_error}>First name is required</Text>
          )}
        </View>
        <View style={styles.name_sub_container}>
          <Text>Last Name *</Text>
          <TextInput
            style={styles.input_name}
            onChangeText={text => onLastNameChange(text)}
          />
          {lastNameError && (
            <Text style={styles.form_input_error}>Last name is required</Text>
          )}
        </View>
      </View>
      <View style={styles.email_container}>
        <Text>Email Address *</Text>
        <TextInput
          style={styles.input_email}
          onChangeText={text => onEmailChange(text)}
        />
        {emailError && (
          <Text style={styles.form_input_error}>Invalid email format</Text>
        )}
      </View>
      <View style={styles.authentication_container}>
        <Text>Authenticate using * </Text>
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
      <View>
        {selectError && (
          <Text style={styles.form_input_error}>Select password or OTP</Text>
        )}
      </View>
      {passwordSelected ? (
        <View>
          <Text>Password</Text>
          <TextInput
            style={styles.input_password}
            onChangeText={text => onPasswordChange(text)}
          />
          {rules.map(rule => {
            const cn = password && password.match(rule.pattern);
            return cn ? (
              <Text>
                <Text style={styles.password_passed}>&#10003; </Text>
                {rule.label}
              </Text>
            ) : (
              <Text>
                <Text style={styles.password_rejected}>&#215; </Text>
                {rule.label}
              </Text>
            );
          })}
        </View>
      ) : null}
      <View style={styles.joinBtn}>
        <Button title="Join" color="#fff" onPress={onSubmit} />
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
  input_password: {
    height: 40,
    borderWidth: 1,
    width: '90%',
  },
  authentication_container: {
    display: 'flex',
    flexDirection: 'row',
  },
  password_container: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
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
    marginTop: 20,
    backgroundColor: '#2089DC',
  },
  form_input_error: {
    fontSize: 10,
    color: 'red',
  },
  password_passed: {
    fontSize: 14,
    color: '#5EBA7D',
  },
  password_rejected: {
    fontSize: 14,
    color: 'red',
  },
});

export default Register;
