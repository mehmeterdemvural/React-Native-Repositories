import React from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import Modal from 'react-native-modal';

import {styles} from './LookImageModal.styles';

function LookImageModal({visible, onClose, url}) {
  return (
    <Modal
      style={styles.modal}
      swipeDirection={['down', 'up']}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <Image source={{uri: url}} style={styles.image} />
    </Modal>
  );
}

export default LookImageModal;
