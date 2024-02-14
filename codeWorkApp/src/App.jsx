import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {SafeAreaView, Text, View} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
