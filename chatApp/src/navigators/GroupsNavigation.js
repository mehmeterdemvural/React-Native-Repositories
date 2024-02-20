import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Pages
import Groups from '../pages/Messages/Groups';
import Group from '../pages/Messages/Group';

//Context
import {useAuth} from '../contexts/AuthContext';
import {useModalsContext} from '../contexts/ModalsContext';

import Header from '../components/Header';

function GroupsNavigation({navigation}) {
  const {user} = useAuth();

  const Stack = createNativeStackNavigator();

  const {toggleAddGroup, toggleImageModal} = useModalsContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="AllGroupsPage"
        component={Groups}
        options={{
          header: () => (
            <Header
              title={'Groups'}
              headerRight={
                <TouchableWithoutFeedback onPress={toggleAddGroup}>
                  <Icon name={'plus-circle'} size={30} color={'#E96479'} />
                </TouchableWithoutFeedback>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="Group"
        component={Group}
        options={{
          header: ({route}) => (
            <Header
              headerLeft={
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('AllGroupsPage')}>
                  <Icon
                    name={'keyboard-backspace'}
                    size={30}
                    color={'#E96479'}
                  />
                </TouchableWithoutFeedback>
              }
              headerCenter={
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <View style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={toggleImageModal}>
                      <Image
                        source={{uri: route.params.photo}}
                        style={{width: 26, height: 26, borderRadius: 13}}
                      />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{flex: 9}}>
                    <Text
                      style={{
                        color: '#4D455D',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginLeft: 20,
                      }}>
                      {route.params.name}
                    </Text>
                  </View>
                </View>
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default GroupsNavigation;
