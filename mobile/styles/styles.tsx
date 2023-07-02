import {StyleSheet} from 'react-native';

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
  register_error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  add_user_container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    // backgroundColor: '#ccc',
  },
  add_user_sub_container: {
    width: '30%',
    marginLeft: 'auto',
    // backgroundColor: 'lightblue',
  },
  add_user_name: {
    height: 30,
    borderWidth: 1,
    width: '90%',
    marginRight: 10,
  },
  add_user_rate_container: {
    width: '40%',
    marginLeft: 'auto',
    // backgroundColor: 'lightblue'
  },
  add_user_btn: {
    width: '30%',
    marginLeft: 'auto',
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#2089DC',
  },
  setup_container: {
    display: 'flex',
    flexDirection: 'row',
  },
  setup_btn: {
    width: '44%',
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2089DC',
  },
});

export default styles;
