import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './App.styles';
import Header from './components/Header';
import ToDoCard from './components/ToDoCard';
import AddToDo from './components/AddToDo';
import Loading from './components/Loading';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('toDoList').then(data => {
      if (data !== null) {
        setToDoList(JSON.parse(data));
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header toDoList={toDoList} />
          <View style={styles.flatList}>
            <FlatList
              data={toDoList}
              renderItem={({item}) => (
                <ToDoCard
                  work={item}
                  toDoList={toDoList}
                  setToDoList={setToDoList}
                />
              )}
              keyExtractor={item => item.title}
            />
          </View>
          <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
        </>
      )}
    </SafeAreaView>
  );
}

export default App;
