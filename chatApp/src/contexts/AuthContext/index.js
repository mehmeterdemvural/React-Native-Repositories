import {useState, useEffect, createContext, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (auth().currentUser) {
      const id = auth().currentUser.uid;
      database()
        .ref(`/users/${id}/`)
        .on('value', snapshot => {
          snapshot.val() && setUser(snapshot.val());
          setAuthLoading(false);
        });
    } else {
      setUser(null);
      setAuthLoading(false);
    }
  }, []);

  const reloadUser = () => {
    database()
      .ref(`/users/${user.id}/`)
      .on('value', snapshot => {
        setUser(snapshot.val());
      });
  };

  const signupFunc = async signupValues => {
    try {
      await auth()
        .createUserWithEmailAndPassword(
          signupValues.email,
          signupValues.password,
        )
        .then(() => {
          const userID = auth().currentUser.uid;
          database()
            .ref(`/users/${userID}/`)
            .set({id: userID, email: signupValues.email, isVerified: false});
        })
        .then(() => {
          auth().signOut();
          showMessage({
            message: 'Congratulations!',
            description: 'Your user has been registered. Please login.',
            type: 'success',
            duration: 5000,
          });
        });
      return true;
    } catch (error) {
      showMessage({
        message: 'Attention!',
        description: "Couldn't register user.",
        type: 'danger',
        duration: 3000,
      });
      return false;
    }
  };

  const signinFunc = async signinValues => {
    try {
      await auth()
        .signInWithEmailAndPassword(signinValues.email, signinValues.password)
        .then(() => {
          database()
            .ref(`/users/${auth().currentUser.uid}/`)
            .once('value')
            .then(snapshot => {
              setUser(snapshot.val());
            });
        })
        .then(() => {
          showMessage({
            message: 'Congratulations!',
            description: 'Successfully logged in.',
            type: 'success',
            duration: 5000,
          });
        });
    } catch (error) {
      showMessage({
        message: 'Attention!',
        description: 'Invalid email or password.',
        type: 'danger',
        duration: 3000,
      });
    }
  };

  const signoutFunc = async () => {
    try {
      auth()
        .signOut()
        .then(() => {
          setUser(null);
          showMessage({
            message: 'Congratulations!',
            description: 'Successfully logged out.',
            type: 'success',
            duration: 5000,
          });
        });
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code).title,
        description: authErrorMessageParser(error.code).desc,
        type: authErrorMessageParser(error.code).type,
        duration: 3000,
      });
    }
  };

  const values = {
    user,
    setUser,
    signinFunc,
    signupFunc,
    authLoading,
    signoutFunc,
    reloadUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthContextProvider};
