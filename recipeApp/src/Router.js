import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#AA5656',
          headerStyle: {backgroundColor: '#F1DBBF'},
          statusBarColor: '#F1DBBF',
          headerTitleStyle: {color: '#AA5656', fontWeight: 'bold'},
          headerTitleAlign: 'center',
          navigationBarColor: '#698269',
        }}>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            headerTitle: 'Categories',
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            headerTitle: 'Meals',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            headerTitle: 'Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
