import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, Keyboard} from 'react-native';
import Modal from 'react-native-modal';
import {showMessage} from 'react-native-flash-message';

import {styles} from './ContentInputModal.styles';

function ContentInputModal({visible, onClose, onSend}) {
  const [text, setText] = useState(null);

  const handleSend = () => {
    if (!text) {
      onClose();
      return showMessage({
        message: 'Fail',
        description: 'Message cannot be empty !',
        type: 'danger',
        duration: 3000,
      });
    } else {
      onSend(text);
      setText(null);
    }
  };

  return (
    <Modal
      style={styles.modal}
      swipeDirection={['left']}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={() => Keyboard.dismiss()}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="..." onChangeText={setText} multiline style={styles.textInput}/>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default ContentInputModal;
