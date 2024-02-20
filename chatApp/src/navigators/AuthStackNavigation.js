import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Pages
import Welcome from '../pages/auth/Welcome';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';
import CompleteProfile from '../pages/auth/CompleteProfile';

//Context
import {useAuth} from '../contexts/AuthContext';
import Header from '../components/Header';

const AuthStackNavigation = () => {
  const {user, signoutFunc} = useAuth();
  const Stack = createNativeStackNavigator();
  console.log('user', user);

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#7DB9B6',
        navigationBarColor: '#7DB9B6',
        navigationBarHidden: true,
        headerTitleStyle: {fontWeight: 'bold', color: '#E96479'},
        headerStyle: {backgroundColor: '#7DB9B6'},
        headerTitleAlign: 'center',
        headerTintColor: '#E96479',
        headerBackTitleVisible: false,
      }}>
      {!user ? (
        <>
          <Stack.Screen
            name="WelcomePage"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignupPage"
            component={Signup}
            options={{title: 'Sign Up'}}
          />
          <Stack.Screen
            name="SigninPage"
            component={Signin}
            options={{title: 'Sign In'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="CompleteProfilPage"
            component={CompleteProfile}
            options={{
              header: () => (
                <Header
                  headerRight={
                    <TouchableWithoutFeedback onPress={signoutFunc}>
                      <Icon name={'logout'} size={25} color={'#E96479'} />
                    </TouchableWithoutFeedback>
                  }
                />
              ),
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export {AuthStackNavigation};
