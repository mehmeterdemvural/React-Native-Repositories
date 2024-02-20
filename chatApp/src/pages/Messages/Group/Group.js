import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

//Database
import database from '@react-native-firebase/database';

//Contexts
import {useAuth} from '../../../contexts/AuthContext';
import {useModalsContext} from '../../../contexts/ModalsContext';

//Css
import {styles} from './Group.styles';

//Components
import Message from '../../../components/Message';
import Loading from '../../../components/Loading/Loading';

//Modals
import LookImageModal from '../../../components/modals/LookImageModal';

//Utils
import parseContentData from '../../../utils/parseContentData';

function Group({route}) {
  const {user} = useAuth();
  const {showImageModalVsb, toggleImageModal} = useModalsContext();
  const id = route.params.id;
  const [groupLoading, setGroupLoading] = useState(true);
  const [contentList, setContentList] = useState();

  useEffect(() => {
    database()
      .ref(`messages/groups/${id}/messages`)
      .on('value', snapshot => {
        if (snapshot.val()) {
          setContentList(parseContentData(snapshot.val()));
          setGroupLoading(false);
        } else {
          setGroupLoading(false);
        }
      });
  }, []);

  const handleSendContent = async content => {
    try {
      const contentObj = {
        text: content,
        writer: user,
        date: new Date().toISOString(),
      };
      database().ref(`messages/groups/${id}/messages`).push(contentObj);
    } catch (error) {
      console.log(error.code);
    }
  };

  if (groupLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Message content={contentList} submittedMessage={handleSendContent} />
      <LookImageModal
        url={route.params.photo}
        visible={showImageModalVsb}
        onClose={toggleImageModal}
      />
    </View>
  );
}

export default Group;
