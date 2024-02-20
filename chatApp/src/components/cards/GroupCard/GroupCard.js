import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';

import {styles} from './GroupCard.styles';

function GroupCard({group, goGroup}) {

  return (
    <TouchableWithoutFeedback onPress={goGroup}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: group.image}}
              style={{width: 30, height: 30, borderRadius: 15}}
            />
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.username}>{group.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default GroupCard;
