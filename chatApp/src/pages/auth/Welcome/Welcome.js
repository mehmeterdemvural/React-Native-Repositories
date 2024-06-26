import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import Lottie from 'lottie-react-native';

import {styles} from './Welcome.styles';

function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.lottieContainer}>
        <Lottie
          source={require('../../../assets/hasbihal.json')}
          autoPlay
          loop
          style={{flex: 1}}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to Chat App !</Text>
        <Text style={styles.text}>
          If you have an account with Chat App, please login, otherwise please
          register.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SigninPage')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignupPage')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;
