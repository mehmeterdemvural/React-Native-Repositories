import {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

import LoadingPage from '../../components/LoadingPage';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [initialLoading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let user;
      try {
        user = await AsyncStorage.getItem('user');
        if (user) {
          setUser(JSON.parse(user));
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    bootstrapAsync();
  }, []);

  const signin = async (email, password, redirect = false) => {
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          setUser(response.user);
          AsyncStorage.setItem('user', JSON.stringify(response.user));
          showMessage({
            message: 'SUCCESS',
            description: redirect
              ? 'User created and logged in successfully!'
              : 'You have successfully logged in!',
            type: 'success',
            duration: 5000,
            floating: true,
            statusBarHeight: 50,
            backgroundColor: '#4D455D',
            titleStyle: {color: '#E96479'},
            textStyle: {color: '#F5E9CF'},
          });
        })
        .catch(error => {
          console.log(error);
          showMessage({
            message: 'ERROR',
            description: "Couldn't log in. User e-mail or password is wrong.",
            type: 'success',
            duration: 5000,
            floating: true,
            statusBarHeight: 50,
            backgroundColor: '#F5E9CF',
            titleStyle: {color: '#E96479'},
            textStyle: {color: '#4D455D'},
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await signin(email, password, true);
    } catch (error) {
      showMessage({
        message: 'ERROR',
        description:
          "Couldn't create user. Please try again later with another e-mail address.",
        type: 'success',
        duration: 3000,
        floating: true,
        statusBarHeight: 50,
        backgroundColor: '#F5E9CF',
        titleStyle: {color: '#E96479'},
        textStyle: {color: '#4D455D'},
      });
    }
  };

  const logout = () => {
    try {
      auth()
        .signOut()
        .then(() => {
          setUser(null);
          AsyncStorage.removeItem('user');
        });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    user,
    initialLoading,
    signin,
    signup,
    logout,
  };

  if (initialLoading) {
    return <LoadingPage />;
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};
