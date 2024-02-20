import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import database from '@react-native-firebase/database';

import {styles} from './AllMessages.styles';
import parseContentData from '../../../utils/parseContentData';
import Loading from '../../../components/Loading';
import {useAuth} from '../../../contexts/AuthContext';
import Message from '../../../components/Message';

function AllMessages() {
  const {user} = useAuth();

  const [loading, setLoading] = useState(true);

  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('/messages/allMessages')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
        setLoading(false);
      });
  }, []);

  const handleSendContent = content => {
    editSendContent(content);
  };
  const editSendContent = async content => {
    try {
      const contentObj = {
        text: content,
        writer: user,
        date: new Date().toISOString(),
      };
      database().ref('/messages/allMessages').push(contentObj);
    } catch (error) {
      console.log(error.code);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Message content={contentList} submittedMessage={handleSendContent} />
    </SafeAreaView>
  );
}

export default AllMessages;
