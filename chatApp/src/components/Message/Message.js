import React from 'react';
import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist';

import MessageCard from '../cards/MessageCard';
import MessageInput from '../MessageInput';
import EmptyMessage from '../EmptyMessage';

function Message({content, submittedMessage}) {
  const renderMessage = ({item}) => <MessageCard message={item} />;

  return (
    <>
      <AutoScrollFlatList
        data={content}
        threshold={20}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        ListEmptyComponent={EmptyMessage}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
      />
      <MessageInput sendMessage={submittedMessage} />
    </>
  );
}

export default Message;
