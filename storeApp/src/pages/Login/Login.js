import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {styles} from './Login.styles';

import Input from '../../componets/Input';

import {useAuth} from '../../contexts/AuthContext';
import LottieView from 'lottie-react-native';

function Login({navigation}) {
  const [postLoading, setPostLoading] = useState(false);
  const {login} = useAuth();

  async function handleLogin(values) {
    setPostLoading(true);
    await login(values);
    setPostLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <LottieView
          source={require('../../assets/login2.json')}
          autoPlay
          loop
          style={{
            flex: 1,
          }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Input handleSubmit={handleLogin} loading={postLoading} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
