import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {loginShema} from './loginValidation';
import {styles} from './Input.styles';

function Input({handleSubmit, loading}) {
  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={handleSubmit}
      validationSchema={loginShema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Username</Text>
            {errors.username && touched.username ? (
              <Text style={styles.alertText}>{errors.username}</Text>
            ) : null}
          </View>
          <View style={styles.textInputContainer}>
            <Icon
              name={'account'}
              size={20}
              color={'#DC8449'}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="Plese enter your username"
              placeholderTextColor={'white'}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Password</Text>
            {errors.password && touched.password ? (
              <Text style={styles.alertText}>{errors.password}</Text>
            ) : null}
          </View>
          <View style={styles.textInputContainer}>
            <Icon
              name={'key'}
              size={20}
              color={'#DC8449'}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Plese enter your password"
              placeholderTextColor={'white'}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.buttonContainer}>
            {loading ? (
              <ActivityIndicator color={'white'} />
            ) : (
              <Text style={styles.buttonText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

export default Input;
