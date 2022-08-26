import React, { useState } from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from 'react-native';

import RadialGradient from 'react-native-radial-gradient';
import { globalStyles } from '../styles/global';
import colors from '../utils/colors';

const SCREEN = Dimensions.get('screen');
const CENTER_OF_GRADIENT = [SCREEN.width / 2, SCREEN.height / 2];
const FACEBOOK_STRING = 'Facebook';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (!email || !password) {
      Alert.alert(FACEBOOK_STRING, 'Both email and password are required.');
    }
    else if (!isEmailValid(email)) {
      Alert.alert(FACEBOOK_STRING, 'Invalid email address.');
    }
    else {
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    }
  }

  const isEmailValid = (email) => {
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return (regexp.test(email) === true) ? true : false;
  }

  const alertHandler = (value) => {
    Alert.alert(FACEBOOK_STRING, `Directing to ${value} page...`);
  }

  return (
    <RadialGradient 
      style={globalStyles.radialGradient}
      colors={[colors.white, colors.blue1]}
      stops={[0.2, 0.4, 0.3, 0.75]}
      center={CENTER_OF_GRADIENT}
      radius={270}
    >
      <View style={globalStyles.container}>
        <View style={globalStyles.loginContainer}>
          <Image 
            style={globalStyles.loginLogo} 
            source={require('../assets/logo/facebook_name_white.png')} 
          />
          <View style={globalStyles.inputContainer}>
            <TextInput 
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={globalStyles.inputContainer}>
            <TextInput 
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <TouchableOpacity style={globalStyles.button} onPress={loginHandler}>
            <Text style={globalStyles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => alertHandler('signup')}>
            <Text style={globalStyles.signup}>Sign Up for Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alertHandler('help')}>
            <Text style={globalStyles.help}>?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RadialGradient>
  );
};

export default LoginScreen;