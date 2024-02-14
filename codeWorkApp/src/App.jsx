import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const App = () => {
  useEffect(() => {
    database()
      .ref('/users/123')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  }, []);

  return (
    <SafeAreaView>
      <Text>CodeWork</Text>
    </SafeAreaView>
  );
};

export default App;
