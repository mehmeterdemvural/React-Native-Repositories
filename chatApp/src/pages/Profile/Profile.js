import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import database from '@react-native-firebase/database';

import {useAuth} from '../../contexts/AuthContext';
import {useModalsContext} from '../../contexts/ModalsContext';

import {styles} from './Profile.styles';
import LookImageModal from '../../components/modals/LookImageModal';
import Button from '../../components/Button';
import {G} from 'react-native-svg';

function Profile() {
  const {user} = useAuth();
  const {showImageModalVsb, toggleImageModal} = useModalsContext();

  console.log('user', user);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={toggleImageModal}
          style={styles.imageContainer}>
          <Image
            source={{uri: user.profilePhotoURL}}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={styles.label}>{`${user.firstName} ${user.lastName}`}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Email</Text>
          <Text style={styles.textSeparator}>:</Text>
          <Text style={styles.text}>{`${user.email}`}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Gender</Text>
          <Text style={styles.textSeparator}>:</Text>
          <Text
            style={
              styles.text
            }>{`${user.gender[0].toUpperCase()}${user.gender.slice(1)}`}</Text>
        </View>
      </View>

      <LookImageModal
        visible={showImageModalVsb}
        onClose={toggleImageModal}
        url={user.profilePhotoURL}
      />
    </View>
  );
}

export default Profile;
