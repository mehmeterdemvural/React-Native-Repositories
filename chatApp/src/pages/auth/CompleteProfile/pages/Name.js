import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ProgressBar} from 'react-native-paper';
import Lottie from 'lottie-react-native';

import CompleteProfileValidations from './CompleteProfileValidations';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import {styles} from '../CompleteProfile.styles';

function Name({props}) {
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
          source={require('../../../../assets/name.json')}
          autoPlay
          loop
          speed={0.4}
          style={styles.lottie}
        />
      </View>
      <Formik
        validationSchema={CompleteProfileValidations}
        initialValues={{
          firstName: props.profileValues.firstName || '',
          lastName: props.profileValues.lastName || '',
        }}
        onSubmit={names => {
          props.updateProfileValues(names);
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
              <Text style={styles.title}>Name</Text>
              <Text style={styles.desc}>
                {'     '}We need your name information to use the application.
                "First Name" and "Last Name" fields must be filled in
                truthfully.{'\n\n     '}'First Name' is the name that others can
                see while using the app. 'Last Name' is a requested information
                for authentication purposes.
              </Text>
            </View>
            <View style={styles.bodyContainer}>
              <Input
                textName="First Name"
                para="firstName"
                touched={touched}
                errors={errors}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                autoCapitalize={'words'}
              />
              <Input
                textName="Last Name"
                para="lastName"
                touched={touched}
                errors={errors}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                autoCapitalize={'words'}
              />
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
                  handleSubmit={() => {
                    handleSubmit();
                  }}
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
export default Name;
