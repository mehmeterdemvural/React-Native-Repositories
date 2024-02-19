import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert,
} from 'react-native';

import {styles} from './AddToDo.styles';
import Seperator from '../Seperator';

function AddToDo({toDoList, setToDoList}) {
  const [addToDo, setAddToDo] = useState('');
  const onpress = () => {
    if (addToDo === '') {
      Keyboard.dismiss();
      return Alert.alert('Attention', 'Please enter a value.');
    } else {
      let title = toDoList.map(item => item.title);
      if (title.includes(addToDo)) {
        setAddToDo('');
        Keyboard.dismiss();
        return Alert.alert('Attention', 'This to do is already exist.');
      } else {
        const add = {title: addToDo, isDone: false};
        setToDoList(prev => [...prev, add]);
        setAddToDo('');
        Keyboard.dismiss();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add To Do ..."
          placeholderTextColor={'#808080'}
          selectionColor={'#FFA500'}
          onChangeText={setAddToDo}
          value={addToDo}
        />
      </View>
      <Seperator />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onpress}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddToDo;
