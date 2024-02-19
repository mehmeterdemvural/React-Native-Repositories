import React from 'react';
import Lottie from 'lottie-react-native';

function Error() {
  return (
    <Lottie
      source={require('../../assets/error.json')}
      autoPlay
      loop
      style={{flex: 1}}
    />
  );
}

export default Error;
