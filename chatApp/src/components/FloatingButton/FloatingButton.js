import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './FloatingButton.styles';

function FloatingButton({onPress, icon}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} color={'#F5E9CF'} size={30} />
    </TouchableOpacity>
  );
}

export default FloatingButton;
