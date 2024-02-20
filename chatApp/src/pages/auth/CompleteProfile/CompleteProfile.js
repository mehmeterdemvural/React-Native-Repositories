import React, {useState} from 'react';
import {View} from 'react-native';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

import {styles} from './CompleteProfile.styles';
import {useAuth} from '../../../contexts/AuthContext';
import Name from './pages/Name';
import Initial from './pages/Initial';
import Gender from './pages/Gender';
import ProfilePhoto from './pages/ProfilePhoto';
import Birthday from './pages/Birthday';

function CompleteProfile({navigation}) {
  const {user, reloadUser, signoutFunc} = useAuth();
  const [profileValues, setProfileValues] = useState({});

  //Pages
  const [index, setIndex] = useState(0);
  const pages = [Initial, Name, Gender, Birthday, ProfilePhoto];
  const Page = pages[index];
  const increaseIndex = () => {
    setIndex(index + 1);
  };
  const decreaseIndex = () => {
    setIndex(index - 1);
  };

  const updateProfileValues = async value => {
    if (index !== pages.length - 1) {
      setProfileValues(prev => {
        return {...prev, ...value};
      });
      increaseIndex();
    } else {
      try {
        const userID = user.id;
        await storage()
          .ref(`/profilePhotos/${userID}`)
          .putFile(value.profilePhotoUri);
        const photoUrl = await storage()
          .ref(`profilePhotos/${user.id}`)
          .getDownloadURL();
        await database()
          .ref(`/users/${user.id}/`)
          .update({
            ...profileValues,
            isVerified: true,
            profilePhotoURL: photoUrl,
          });
        reloadUser();
      } catch (error) {
        console.log('Hata oluştu');
      }
    }
  };

  const values = {
    index,
    setIndex,
    increaseIndex,
    decreaseIndex,
    pages,
    profileValues,
    updateProfileValues,
  };
  return (
    <View style={styles.container}>
      <Page props={values} />
    </View>
  );
}

export default CompleteProfile;
