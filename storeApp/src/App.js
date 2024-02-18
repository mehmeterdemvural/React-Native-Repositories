import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Loading from './componets/Loading';

import {useAuth} from './contexts/AuthContext';

const Stack = createNativeStackNavigator();

function App() {
  const {user, initialLoading, logout} = useAuth();

  return (
    <NavigationContainer>
      {initialLoading ? (
        <Loading />
      ) : !user ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: '#4E6E81',
              },
              headerTitleStyle: {
                color: '#DC8449',
              },
              headerTitleAlign: 'center',
              statusBarColor: '#4E6E81',
              navigationBarColor: '#4E6E81',
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: 'Store',
              headerStyle: {
                backgroundColor: '#4E6E81',
              },
              headerTitleStyle: {
                color: '#DC8449',
              },
              headerTitleAlign: 'center',
              statusBarColor: '#4E6E81',
              navigationBarColor: '#4E6E81',
              headerRight: () => (
                <TouchableOpacity onPress={() => logout()}>
                  <Icon name="logout" size={30} color="white" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              title: 'Product Detail',
              headerStyle: {
                backgroundColor: '#4E6E81',
              },
              headerTitleStyle: {
                color: '#DC8449',
              },
              headerTitleAlign: 'center',
              statusBarColor: '#4E6E81',
              navigationBarColor: '#4E6E81',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
