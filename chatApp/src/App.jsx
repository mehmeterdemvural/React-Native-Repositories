import React from 'react';

import {SafeAreaView, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
    </SafeAreaView>
  );
};

const Chat = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Chat</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
};

export default App;
