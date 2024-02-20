import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

//Database
import database from '@react-native-firebase/database';

//Context
import {useAuth} from '../../../contexts/AuthContext';
import {useModalsContext} from '../../../contexts/ModalsContext';

//Css
import {styles} from './PrivateMessage.styles';

//Components
import Message from '../../../components/Message';
import Loading from '../../../components/Loading';

//Modals
import LookImageModal from '../../../components/modals/LookImageModal';

//Utils
import parseContentData from '../../../utils/parseContentData';

function PrivateMessage({route}) {
  const {user} = useAuth();
  const {showImageModalVsb, toggleImageModal} = useModalsContext();
  const id = route.params.id;
  const [privateLoading, setPrivateLoading] = useState(true);
  const [contentList, setContentList] = useState();

  useEffect(() => {
    database()
      .ref(`messages/private/${id}/messages`)
      .on('value', snapshot => {
        if (snapshot.val()) {
          setContentList(parseContentData(snapshot.val()));
          setPrivateLoading(false);
        } else {
          setPrivateLoading(false);
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
      database().ref(`messages/private/${id}/messages`).push(contentObj);
    } catch (error) {
      console.log(error.code);
    }
  };

  if (privateLoading) {
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

export default PrivateMessage;
