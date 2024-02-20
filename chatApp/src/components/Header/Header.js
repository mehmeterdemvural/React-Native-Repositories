import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {styles} from './Header.styles';

function Header({title, headerCenter, headerRight, headerLeft}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftInnerContainer}>{headerLeft}</View>
      <View style={styles.centerInnerContainer}>
        {title ? <Text style={styles.headerText}>{title}</Text> : headerCenter}
      </View>
      <View style={styles.rightInnerContainer}>{headerRight}</View>
    </View>
  );
}

export default Header;
