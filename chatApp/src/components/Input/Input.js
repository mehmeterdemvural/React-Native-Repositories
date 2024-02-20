import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './Input.styles';

function Input({
  textName,
  para,
  iconName,
  touched,
  errors,
  values,
  handleChange,
  handleBlur,
  isSecure = false,
  autoCapitalize = 'none',
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.inputLabel}>{textName}</Text>
        <Text style={styles.yupMessage}>
          {touched[para] && errors[para] && errors[para]}
        </Text>
      </View>
      <View style={styles.inputInnerContiner}>
        <TextInput
          style={styles.input}
          value={values[para]}
          onChangeText={handleChange(para)}
          onBlur={handleBlur(para)}
          placeholder={`${textName} ...`}
          placeholderTextColor={'#F0A04B'}
          autoCapitalize={autoCapitalize}
          secureTextEntry={isSecure}
        />
        <Icon
          name={iconName}
          size={20}
          color={touched[para] && errors[para] ? '#E96479' : '#F0A04B'}
        />
      </View>
    </View>
  );
}

export default Input;
