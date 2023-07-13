import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles, {common_styles, sign_in_styles} from '../styles/styles';
import axios from 'axios';
import validator from 'validator';
import {LOCAL_HOST_URL} from '../config.js';

const SignIn = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authStyle, setAuthStyle] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [signInError, setSignInError] = useState(false);

  const onEmailChange = (email: string) => {
    setEmail(email);
    validateEmail();
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
    validatePassword();
  };

  const onSelect = (method: string) => {
    method === 'OTP' ? setAuthStyle('OTP') : setAuthStyle('password');
    setIsSelected(true);
  };

  const validateEmail = () => {
    !validator.isEmail(email) ? setEmailError(true) : setEmailError(false);
  };

  const validatePassword = () => {
    authStyle === 'password' && password.length < 1
      ? setPasswordError(true)
      : setPasswordError(false);
  };

  const checkSelected = () => {
    authStyle.length > 2 ? setIsSelected(true) : setIsSelected(false);
  };

  const onSubmit = async () => {
    validateEmail();
    validatePassword();
    checkSelected();

    try {
      const response = await axios.post(`${LOCAL_HOST_URL}/signin`, {
        email: email,
        password: authStyle === 'password' ? password : null,
      });
      if (response.status === 200) {
        navigation.navigate('Setup', {ownerEmail: email});
      }
    } catch (err) {
      setSignInError(true);
    } finally {
      setSignInError(false);
    }
  };

  return (
    <View style={common_styles.container}>
      <Text style={sign_in_styles.title}>Sign In</Text>
      <View>
        <View style={common_styles.sub_container}>
          <Text>Email Address *</Text>
          <TextInput
            style={sign_in_styles.input_field}
            onChangeText={text => onEmailChange(text)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          {emailError && (
            <Text style={common_styles.error_message}>
              Invalid email format
            </Text>
          )}
        </View>
        <View>
          <Text>Authentication *</Text>
          <Text>
            <Text
              style={sign_in_styles.authentication}
              onPress={() => onSelect('OTP')}>
              Send OTP
            </Text>
            <Text> or </Text>
            <Text
              style={sign_in_styles.authentication}
              onPress={() => onSelect('password')}>
              Password
            </Text>
          </Text>
          {!isSelected && (
            <View>
              <Text style={common_styles.error_message}>
                Please select OTP or password
              </Text>
            </View>
          )}
          {authStyle === 'password' && (
            <View>
              <Text>Password *</Text>
              <TextInput
                style={sign_in_styles.input_field}
                onChangeText={text => onPasswordChange(text)}
                autoCorrect={false}
              />
              {passwordError && (
                <Text style={common_styles.error_message}>
                  Password is required
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
      <View style={common_styles.btn}>
        <Button title="Sign In" color="#fff" onPress={onSubmit} />
      </View>
      {signInError && (
        <Text style={common_styles.error_message}>
          User does not exist or password is incorrect
        </Text>
      )}
    </View>
  );
};

export default SignIn;
