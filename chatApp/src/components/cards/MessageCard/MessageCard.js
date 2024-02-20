import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {tr, en} from 'date-fns/locale';

import {useAuth} from '../../../contexts/AuthContext';
import {styles} from './MessageCard.styles';
import LookImageModal from '../../modals/LookImageModal';

function MessageCard({message}) {
  const {user} = useAuth();
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: en,
  });

  const [visible, setVisible] = useState(false);

  const toogleVisible = () => {
    setVisible(!visible);
  };

  return (
    <TouchableWithoutFeedback onLongPress={() => console.log(message.id)}>
      <View
        style={
          message.writer.id !== user.id
            ? {...styles.container, alignSelf: 'flex-start'}
            : styles.container
        }>
        <View style={styles.innerContainer}>
          <TouchableWithoutFeedback>
            <Text
              style={
                styles.username
              }>{`${message.writer.firstName} ${message.writer.lastName}`}</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={toogleVisible}>
            <Image
              source={{uri: message.writer.profilePhotoURL}}
              style={{width: 30, height: 30, borderRadius: 15}}
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.text}>{message.text}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <LookImageModal
          url={message.writer.profilePhotoURL}
          visible={visible}
          onClose={toogleVisible}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MessageCard;
