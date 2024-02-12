import React from 'react';
import {Image, Text, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './InfoCard.styles';

const InfoCard = ({visible, close, user}) => {
  return (
    <Modal
      isVisible={visible}
      swipeDirection={'down'}
      onSwipeComplete={close}
      onBackdropPress={close}
      onBackButtonPress={close}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={{uri: user.avatar}} style={styles.image} />
          <Text style={styles.username}>{`${user.username}`}</Text>
        </View>
        <Text
          style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
        <Text style={styles.name}>{`${user.email}`}</Text>
      </View>
    </Modal>
  );
};
export default InfoCard;
