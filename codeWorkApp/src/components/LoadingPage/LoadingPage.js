import React from 'react';
import LottieView from 'lottie-react-native';

function LoadingPage() {
  return (
    <LottieView
      source={require('../../assets/loading.json')}
      autoPlay
      loop
      style={{flex: 1}}
    />
  );
}

export default LoadingPage;
