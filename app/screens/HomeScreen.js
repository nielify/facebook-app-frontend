import React, { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';

import { globalStyles } from '../styles/global';
import { users } from '../data/values';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const backButtonPressHandler = () => {
      Alert.alert('Facebook', 'You are about to log out.', [
        { text: 'CANCEL' },
        { text: 'LOG OUT', onPress: () => navigation.goBack() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backButtonPressHandler,
    );

    return () => backHandler.remove();
  }, []);

  const userPressHandler = user => {
    navigation.navigate('Profile', user);
  };

  return (
    <View style={globalStyles.homeContainer}>
      <View style={globalStyles.homeHeader}>
        <Image
          style={globalStyles.homeLogo}
          source={require('../assets/logo/facebook_name_blue.png')}
        />
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={globalStyles.userContainer}
            onPress={() => userPressHandler(item)}
          >
            <Image
              style={globalStyles.profilePictures}
              source={item.profilePicture}
            />
            <Text style={globalStyles.name}>
              {item.firstName} {item.lastName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
