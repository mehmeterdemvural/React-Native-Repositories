import React from 'react';
import {View, Text} from 'react-native';
import Lottie from 'lottie-react-native';

import {styles} from '../CompleteProfile.styles';
import Button from '../../../../components/Button';

function Initial({props}) {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.lottieContainer}>
        <Lottie
          source={require('../../../../assets/welcome.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Welcome to Hasbihal</Text>
        <Text style={styles.desc}>
          {'     '}Your account is inactive because you did not fill out your
          profile. Please fill in your profile in order to use Hasbihal.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            text={'Complete Profile'}
            handleSubmit={props.increaseIndex}
            loading={false}
          />
        </View>
      </View>
    </View>
  );
}

export default Initial;
