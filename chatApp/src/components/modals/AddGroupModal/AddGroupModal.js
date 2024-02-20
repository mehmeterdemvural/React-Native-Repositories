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
import {showMessage} from 'react-native-flash-message';

import {styles} from './AddGroupModal.styles';

import Button from '../../Button';
import Loading from '../../Loading';
import {useAuth} from '../../../contexts/AuthContext';
import IsEmpty from '../../functions/IsEmpty';

function AddGroupModal({visible, onClose, addGroupFunc}) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();
  const {user} = useAuth();

  const handleAddGroupSubmit = async () => {
    if (addGroupValues.groupName[0] === ' ') {
      showMessage({
        message: 'Error !',
        description:
          'The first character of the group name cannot be a space !',
        type: 'danger',
        duration: 3000,
      });
      onClose();
    } else if (IsEmpty(addGroupValues.groupName)) {
      showMessage({
        message: 'Error !',
        description: 'Group name is required !',
        type: 'danger',
        duration: 4000,
      });
      onClose();
    } else {
      onClose();
      addGroupFunc(addGroupValues).then(() => {
        setAddGroupValues(initialGroupValues);
      });
    }
  };

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

  const initialGroupValues = {
    groupName: '',
    groupImage: '',
    groupMember: [user.id],
    groupFounder: user.id,
  };

  const [addGroupValues, setAddGroupValues] = useState(initialGroupValues);

  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log('Source : ', source.uri);
        setAddGroupValues({...addGroupValues, groupImage: source.uri});
      }
    });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Add Group</Text>
            <Text style={styles.label}>Group Name</Text>
            <TextInput
              value={addGroupValues.groupName}
              placeholder="Group Name ..."
              style={styles.input}
              autoCapitalize={'words'}
              onChangeText={value =>
                setAddGroupValues({...addGroupValues, groupName: value})
              }
            />
          </View>

          <View style={styles.bodyContainer}>
            <Text style={styles.label}>Group Photo</Text>
            <TouchableWithoutFeedback
              style={styles.selectImageContainer}
              onPress={selectImage}>
              {addGroupValues.groupImage ? (
                <Image
                  source={{uri: addGroupValues.groupImage}}
                  resizeMode={'contain'}
                  style={{width: '100%', height: 300, marginTop: 0}}
                />
              ) : (
                <Text style={styles.selectImageText}>Select Group Photo</Text>
              )}
            </TouchableWithoutFeedback>
            <View style={styles.groupMemberContainer}>
              <Text style={styles.label}>Group Members</Text>
              <ScrollView>
                {users.map(
                  (item, index) =>
                    item.id !== user.id && (
                      <View style={styles.usersListContainer} key={index}>
                        <View style={styles.usersPhotoContainer}>
                          <Image
                            source={{uri: item.photo}}
                            style={styles.usersPhoto}
                          />
                        </View>
                        <View style={styles.nameContainer}>
                          <Text>{item.name}</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                          <Checkbox.Item
                            mode="android"
                            status={
                              addGroupValues.groupMember.includes(item.id)
                                ? 'checked'
                                : 'unchecked'
                            }
                            onPress={() => toggleChecked(item.id)}
                          />
                        </View>
                      </View>
                    ),
                )}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              text={'Cancel'}
              handleSubmit={() => {
                setAddGroupValues(initialGroupValues);
                onClose();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button text={'Add'} handleSubmit={handleAddGroupSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddGroupModal;
