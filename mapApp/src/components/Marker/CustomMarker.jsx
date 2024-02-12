import React from 'react';

import {View, Image} from 'react-native';
import {Marker} from 'react-native-maps';

import styles from './CustomMarker.styles';

const CustomMarker = ({coordinates, userImage, onSelect}) => {
  return (
    <Marker coordinate={coordinates} onPress={onSelect}>
      <View>
        <Image source={{uri: userImage}} style={styles.image} />
      </View>
    </Marker>
  );
};

export default CustomMarker;
