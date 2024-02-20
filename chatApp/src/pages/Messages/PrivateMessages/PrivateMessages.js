import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

//Database
import database from '@react-native-firebase/database';

//Css
import {styles} from './PrivateMessages.styles';

//Components
import EmptyMessage from '../../../components/EmptyMessage';
import Loading from '../../../components/Loading';
import PrivateCard from '../../../components/cards/PrivateCard';

//Contexts
import {useAuth} from '../../../contexts/AuthContext';
import {useModalsContext} from '../../../contexts/ModalsContext';

//Modals
import AddPrivateModal from '../../../components/modals/AddPrivateModal';

//Utils
import getUserPhotoUrl from '../../../components/functions/getUserPhotoUrl';
import getUserName from '../../../components/functions/getUserName';
import {id} from 'date-fns/locale';

function PrivateMessages({navigation}) {
  const {user} = useAuth();
  const {addNewMessageMadalVsb, toggleAddNewMessage} = useModalsContext();
  const [privateMessages, setPrivateMessages] = useState();
  const [privateLoading, setPrivateLoading] = useState(true);

  useEffect(() => {
    database()
      .ref('/messages/private')
      .on('value', snapshot => {
        if (snapshot.val()) {
          let result = [];

          Object.values(snapshot.val()).map(item => {
            item.members.map(data => {
              if (data.id === user.id) {
                result.push(item);
              }
            });
          });
          setPrivateMessages(result);
          setPrivateLoading(false);
        } else {
          setPrivateMessages(null);
          setPrivateLoading(false);
        }
      });
  }, []);

  const isThere = async (userID, otherID) => {
    let result;
    await database()
      .ref(`/messages/private`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          result = Object.values(snapshot.val()).find(item => {
            return (
              (item.members[0].id == userID && item.members[1].id == otherID) ||
              (item.members[1].id == userID && item.members[0].id == otherID)
            );
          });
        } else {
          result = null;
        }
      });
    return result;
  };

  const addPrivateMessagesFunc = async id => {
    toggleAddNewMessage();
    try {
      const otherPhoto = await getUserPhotoUrl(id);
      const otherName = await getUserName(id);
      const userId = user.id;
      const userPhoto = await getUserPhotoUrl(userId);
      const messageId = await isThere(userId, id);
      if (messageId) {
        console.log(messageId);
        navigation.navigate('PrivateMessage', {
          id: messageId.id,
          name: otherName,
          photo: otherPhoto,
        });
      } else {
        const newReference = database().ref('/messages/private').push();
        newReference.set({
          id: newReference.key,
          members: [
            {
              id: userId,
              name: `${user.firstName} ${user.lastName}`,
              photo: userPhoto,
            },
            {id: id, name: otherName, photo: otherPhoto},
          ],
          founder: user.id,
          createdDate: new Date().toISOString(),
        });
        navigation.navigate('PrivateMessage', {
          id: newReference.key,
          name: otherName,
          photo: otherPhoto,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderPrivateMessages = ({item}) => {
    const other = item.members.find(data => data.id !== user.id);

    return (
      <PrivateCard
        privateMessage={item}
        tittle={other}
        goPrivateMessage={() =>
          navigation.navigate('PrivateMessage', {
            id: item.id,
            name: other.name,
            photo: other.photo,
          })
        }
      />
    );
  };
  if (privateLoading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={EmptyMessage}
        data={privateMessages}
        renderItem={renderPrivateMessages}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
      />

      <AddPrivateModal
        visible={addNewMessageMadalVsb}
        onClose={toggleAddNewMessage}
        addPrivateMessagesFunc={addPrivateMessagesFunc}
      />
    </View>
  );
}

export default PrivateMessages;
