import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';

import {styles} from './PrivateCard.styles';

function PrivateCard({privateMessage, tittle, goPrivateMessage}) {
  return (
    <TouchableWithoutFeedback onPress={goPrivateMessage}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: tittle.photo}}
              style={{width: 30, height: 30, borderRadius: 15}}
            />
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.username}>{tittle.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default PrivateCard;
