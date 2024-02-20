import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './EmptyMessage.styles';
function EmptyMessage({message = 'Message Not Found'}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default EmptyMessage;
