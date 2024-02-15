import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

// Contexts
import {useAuth} from '../../contexts/AuthContext';

import authErrorMessageParser from '../../utils/authErrorMessageParser';
import {styles} from './Signup.styles';
import {signupSchema} from './SignupValidations';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

function Signup() {
  const {signup} = useAuth();

  const handleSignupSubmit = async values => {
    try {
      await signup(values.email, values.password);
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSignupSubmit}
        validationSchema={signupSchema}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <View style={styles.inputLabelContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <Text style={styles.errorMessage}>
                  {touched.email && errors.email}
                </Text>
              </View>
              <TextInput
                placeholder="Please enter your email"
                placeholderTextColor={'#4D455D'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                keyboardType="email-address"
                inputMode="email"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputLabelContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <Text style={styles.errorMessage}>
                  {touched.password && errors.password}
                </Text>
              </View>
              <TextInput
                placeholder="Please enter your password"
                placeholderTextColor={'#4D455D'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                secureTextEntry
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputLabelContainer}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <Text style={styles.errorMessage}>
                  {touched.confirmPassword && errors.confirmPassword}
                </Text>
              </View>
              <TextInput
                placeholder="Please enter your password"
                placeholderTextColor={'#4D455D'}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                style={styles.input}
                secureTextEntry
                keyboardType="number-pad"
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Signup;
