import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Formik} from 'formik';

import {styles} from './Signin.styles';
import {signinSchema} from './SigninValidations';

import {useAuth} from '../../contexts/AuthContext';

const initialValues = {
  email: '',
  password: '',
};

function Signin({navigation}) {
  const {signin} = useAuth();

  const handleSigninSubmit = async values => {
    signin(values.email, values.password);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSigninSubmit}
        validationSchema={signinSchema}>
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
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View>
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
                autoCapitalize="none"
                keyboardType="number-pad"
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  textAlign: 'right',

                  textDecorationLine: 'underline',
                  color: '#4D455D',
                  fontSize: 12,
                }}>
                Not registered? Click to register.
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Signin;
