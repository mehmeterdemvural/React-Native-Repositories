import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import database from '@react-native-firebase/database';
import {styles} from './AddPrivateModal.style';
import Loading from '../../Loading';
import {useAuth} from '../../../contexts/AuthContext';

function AddPrivateModal({visible, onClose, addPrivateMessagesFunc}) {
  const {user} = useAuth();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    const newList = [];
    database()
      .ref('/users')
      .once('value')
      .then(snapshot => {
        Object.values(snapshot.val()).map(item => {
          newList.push({
            id: item.id,
            name: `${item.firstName} ${item.lastName}`,
            photo: item.profilePhotoURL,
          });
        });
      })
      .then(() => {
        setUsers(newList);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      swipeDirection={['down']}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Send Private Message</Text>
        </View>
        <ScrollView>
          {users.map(
            (item, index) =>
              item.id !== user.id && (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => addPrivateMessagesFunc(item.id)}>
                  <View style={styles.usersListContainer}>
                    <View style={styles.usersPhotoContainer}>
                      <Image
                        source={{uri: item.photo}}
                        style={styles.usersPhoto}
                      />
                    </View>
                    <View style={styles.nameContainer}>
                      <Text>{item.name}</Text>
                    </View>
                    <View style={styles.checkboxContainer}></View>
                  </View>
                </TouchableWithoutFeedback>
              ),
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

export default AddPrivateModal;
