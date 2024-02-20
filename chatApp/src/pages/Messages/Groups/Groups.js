import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, TouchableWithoutFeedback} from 'react-native';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

//Contexts
import {useModalsContext} from '../../../contexts/ModalsContext';

import {styles} from './Groups.styles';
import EmptyMessage from '../../../components/EmptyMessage';
import Loading from '../../../components/Loading';
import {useAuth} from '../../../contexts/AuthContext';
import GroupCard from '../../../components/cards/GroupCard';

//Modals
import AddGroupModal from '../../../components/modals/AddGroupModal';

function Groups({navigation}) {
  const {user} = useAuth();
  const [groupLoading, setGroupLoading] = useState(true);
  const [groups, setGroups] = useState();
  const {addGroupMadalVsb, toggleAddGroup} = useModalsContext();

  useEffect(() => {
    database()
      .ref('/messages/groups')
      .on('value', snapshot => {
        if (snapshot.val()) {
          setGroups(
            Object.values(snapshot.val()).filter(item =>
              item.members.includes(user.id),
            ),
          );
          setGroupLoading(false);
        } else {
          setGroups(null);
          setGroupLoading(false);
        }
      });
  }, []);

  const addGroupFunc = async addGroupValues => {
    setGroupLoading(true);
    try {
      const newReference = await database().ref('/messages/groups').push();
      await storage()
        .ref(`/groupPhotos/${newReference.key}`)
        .putFile(addGroupValues.groupImage);
      const photoUrl = await storage()
        .ref(`/groupPhotos/${newReference.key}`)
        .getDownloadURL();
      await newReference.set({
        id: newReference.key,
        name: addGroupValues.groupName,
        members: addGroupValues.groupMember,
        image: photoUrl,
        founder: addGroupValues.groupFounder,
        createdDate: new Date().toISOString(),
      });
      navigation.navigate('Group', {
        id: newReference.key,
        name: addGroupValues.groupName,
        photo: photoUrl,
      });
      setGroupLoading(false);
      toggleAddGroup();
    } catch (error) {
      console.log('Bir hata oluştu');
    }
  };

  if (groupLoading) {
    return <Loading />;
  }
  const renderGroup = ({item}) => (
    <GroupCard
      group={item}
      goGroup={() =>
        navigation.navigate('Group', {
          id: item.id,
          name: item.name,
          photo: item.image,
          messages: item.messages,
        })
      }
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={item => item.id}
        renderItem={renderGroup}
        ListEmptyComponent={<EmptyMessage message="Group Not Found" />}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
      />

      <AddGroupModal
        visible={addGroupMadalVsb}
        onClose={toggleAddGroup}
        addGroupFunc={addGroupFunc}
      />
    </View>
  );
}

export default Groups;
