import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {useAuth} from '../../contexts/AuthContext';

const Profile = () => {
  const {user, logout} = useAuth();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    btnContainer: {
      alignSelf: 'center',
      margin: 20,
      width: Dimensions.get('window').width / 1.4,
      borderRadius: 10,
      backgroundColor: '#7DB9B6',
    },
    logoutBtn: {
      padding: 10,
      textAlign: 'center',
      color: '#E96479',
      fontWeight: 'bold',
      fontSize: 20,
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{user.email}</Text>
      </View>
      <TouchableOpacity onPress={logout} style={styles.btnContainer}>
        <Text style={styles.logoutBtn}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
