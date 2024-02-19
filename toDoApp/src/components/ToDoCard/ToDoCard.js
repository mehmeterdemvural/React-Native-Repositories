import React from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';

import {styles} from './ToDoCard.styles';

function ToDoCard({work, toDoList, setToDoList}) {
  const onpress = () => {
    const list = toDoList.map(item => {
      if (item.title === work.title) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setToDoList(list);
  };
  const deleteItem = work => {
    const newList = toDoList.filter(item => item.title !== work.title);
    setToDoList(newList);
  };
  const onLongPress = () => {
    Alert.alert('Are you sure?', `"${work.title}" will be deleted !`, [
      {text: 'Yes', onPress: () => deleteItem(work)},
      {text: 'No'},
    ]);
  };

  return (
    <View
      style={work.isDone === false ? styles.container : styles.containerDone}>
      <TouchableOpacity onPress={onpress} onLongPress={onLongPress}>
        <Text style={work.isDone === false ? styles.text : styles.textDone}>
          {work.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ToDoCard;
