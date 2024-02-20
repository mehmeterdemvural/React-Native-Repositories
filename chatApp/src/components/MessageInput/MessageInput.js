import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './MessageInput.styles';

function MessageInput({
  placeholder = '...',
  iconName = 'send',
  placeholderTextColor = '#4D455D',
  iconColor = '#7DB9B6',
  iconSize = 20,
  sendMessage,
}) {
  const [messageText, setMessageText] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={messageText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.textInput}
        multiline
        onChangeText={setMessageText}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          sendMessage(messageText);
          setMessageText('');
          Keyboard.dismiss();
        }}>
        <Icon
          name={iconName}
          size={iconSize}
          style={styles.icon}
          color={iconColor}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default MessageInput;
