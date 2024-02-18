import {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import users from '../assets/users';
import {Alert} from 'react-native';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@storeApp:user');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
      setInitialLoading(false);
    }
    loadStorageData();
  }, []);

  const login = user => {
    const checkUser = users.find(
      u => u.username === user.username && u.password === user.password,
    );
    if (!checkUser) {
      return Alert.alert('Store App', 'Username or password is incorrect!');
    }

    setUser(user);
    AsyncStorage.setItem('@storeApp:user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('@storeApp:user');
  };

  const values = {
    user,
    setUser,
    initialLoading,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};
