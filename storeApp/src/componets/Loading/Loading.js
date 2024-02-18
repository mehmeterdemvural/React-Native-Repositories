import React from 'react';
import Lottie from 'lottie-react-native';

function Loading() {
  return (
    <Lottie
      source={require('../../assets/loading3.json')}
      autoPlay
      loop
      style={{flex: 1}}
    />
  );
}

export default Loading;
