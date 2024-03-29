import React from 'react';

import {View, ActivityIndicator} from 'react-native';

import styles from './Loading.style.js';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loading;
