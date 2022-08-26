import React, { useEffect } from 'react';
import { 
  Text, 
  View, 
  BackHandler, 
  Image,
} from 'react-native';

import { globalStyles } from '../styles/global';

const ProfileScreen = ({route, navigation}) => {
  const {
    firstName, 
    lastName, 
    profilePicture, 
    email, 
    phone, 
    gender, 
    address
  } = route.params;

  useEffect(() => {
    const backButtonPressHandler = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backButtonPressHandler,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={globalStyles.profileContainer}>
      <View style={globalStyles.profileHeader}>
        <Image style={globalStyles.profilePicture} source={profilePicture} />
        <View>
          <Text style={globalStyles.profileName}>{ firstName } { lastName }</Text>
        </View>
      </View>
      <View style={globalStyles.profileDetailsContainer}>
        <Text style={globalStyles.profileDetails}>Sex: {gender}</Text>
        <Text style={globalStyles.profileDetails}>Email: {email}</Text>
        <Text style={globalStyles.profileDetails}>Phone: {phone}</Text>
        <Text style={globalStyles.profileDetails}>Address: {address}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;