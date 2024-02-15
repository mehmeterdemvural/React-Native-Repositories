import React from 'react';
import LottieView from 'lottie-react-native';

function ErrorPage() {
  return (
    <LottieView
      source={require('../../assets/error.json')}
      autoPlay
      loop
      style={{flex: 1}}
    />
  );
}

export default ErrorPage;
