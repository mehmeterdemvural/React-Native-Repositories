import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ProgressBar} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import {showMessage} from 'react-native-flash-message';
import Lottie from 'lottie-react-native';

import Button from '../../../../components/Button';
import {styles} from '../CompleteProfile.styles';

function Gender({props}) {
  return (
    <KeyboardAwareScrollView
      style={styles.innerContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ProgressBar
        color={'#F0A04B'}
        animatedValue={props.index / (props.pages.length - 1)}
        style={styles.progress}
      />
      <View style={styles.lottieInnerContainer}>
        <Lottie
          source={require('../../../../assets/gendernew.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
      <Formik
        initialValues={{gender: props.profileValues.gender || ''}}
        onSubmit={value => {
          if (value.gender !== '') {
            props.updateProfileValues(value);
          } else {
            showMessage({
              message: 'Error!',
              description: 'Gender is required. Please select your gender .',
              duration: 5000,
              color: '#E96479',
              backgroundColor: '#F5E9CF',
            });
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Gender</Text>
              <Text style={styles.desc}>
                {'     '}We need your gender information to use the application.
                Your gender information must be filled in correctly. The gender
                information you provide will not be allowed to be changed.
              </Text>
            </View>
            <View style={styles.bodyContainer}>
              <RadioButton.Group
                onValueChange={handleChange('gender')}
                value={values.gender}>
                <View style={styles.radioContainer}>
                  <View style={styles.radioInnerContainer}>
                    <RadioButton.Item
                      mode="android"
                      value="male"
                      color={'#F0A04B'}
                      status={
                        props.profileValues.gender === 'male' && 'checked'
                      }
                    />
                    <Text style={styles.genderText}>Male</Text>
                  </View>
                  <View style={styles.radioInnerContainer}>
                    <RadioButton.Item
                      mode="android"
                      value="female"
                      color={'#F0A04B'}
                      status={
                        props.profileValues.gender === 'female' && 'checked'
                      }
                    />
                    <Text style={styles.genderText}>Female</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  text={'Back'}
                  handleSubmit={props.decreaseIndex}
                  loading={false}
                />
              </View>
              <View style={styles.button}>
                <Button
                  text={'Next'}
                  handleSubmit={handleSubmit}
                  loading={false}
                />
              </View>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

export default Gender;
