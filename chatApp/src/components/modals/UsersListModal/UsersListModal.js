import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {launchImageLibrary} from 'react-native-image-picker';
import {Checkbox} from 'react-native-paper';
import database from '@react-native-firebase/database';

import {styles} from './UsersListModal.styles';

import Button from '../../Button';
import Loading from '../../Loading';

function UsersListModal({visible, onClose, setAddGroupValues, addGroupValues}) {
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

  const toggleChecked = async checkedID => {
    const newUsers = addGroupValues.groupMember;
    if (newUsers.includes(checkedID)) {
      const indexNo = newUsers.indexOf(checkedID);
      newUsers.splice(indexNo, 1);
    } else {
      newUsers.push(checkedID);
    }

    setAddGroupValues({...addGroupValues, groupMember: newUsers});
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Modal
      style={styles.modal}
      swipeDirection={['down']}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Add Group</Text>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.label}>Group Members</Text>
          {users.map((item, index) => (
            <TouchableWithoutFeedback key={index}>
              <View style={styles.checkedboxContainer}>
                <Image
                  source={{uri: item.photo}}
                  style={{height: 20, width: 20, borderRadius: 10}}
                />
                <Text>{item.name}</Text>
                <Checkbox
                  status={
                    addGroupValues.groupMember.includes(item.id)
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => toggleChecked(item.id)}
                />
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              text={'Ok'}
              handleSubmit={() => {
                onClose();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default UsersListModal;
