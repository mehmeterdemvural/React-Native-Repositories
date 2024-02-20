import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lottie from 'lottie-react-native';
import {registerTranslation} from 'react-native-paper-dates';
registerTranslation('en', {
  save: 'Save',
  selectSingle: 'Select date',
  selectMultiple: 'Select dates',
  selectRange: 'Select period',
  notAccordingToDateFormat: inputFormat => `Date format must be ${inputFormat}`,
  mustBeHigherThan: date => `Must be later then ${date}`,
  mustBeLowerThan: date => `Must be earlier then ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: 'Day is not allowed',
  previous: 'Previous',
  next: 'Next',
  typeInDate: 'Type in date',
  pickDateFromCalendar: 'Pick date from calendar',
  close: 'Close',
});

//Navigators
import {AuthStackNavigation} from './navigators/AuthStackNavigation';
import {TabNavigation} from './navigators/TabNavigation';

//Context
import {useAuth} from './contexts/AuthContext';

function Router() {
  const {user, authLoading} = useAuth();

  const Stack = createNativeStackNavigator();

  if (authLoading) {
    return (
      <Lottie
        source={require('./assets/hasbihal.json')}
        autoPlay
        loop
        style={{
          marginTop: 100,
          padding: 0,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          navigationBarHidden: true,
        }}>
        {!user || !user.isVerified ? (
          <>
            <Stack.Screen
              name="AuthControllerPage"
              component={AuthStackNavigation}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainPage"
              component={TabNavigation}
              options={{statusBarColor: '#7DB9B6'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
