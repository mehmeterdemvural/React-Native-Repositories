import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Pages
import PrivateMessages from '../pages/Messages/PrivateMessages';
import PrivateMessage from '../pages/Messages/PrivateMessage';

//Context
import {useModalsContext} from '../contexts/ModalsContext';

//Components
import Header from '../components/Header';

function PrivateNavigation({navigation}) {
  const {toggleAddNewMessage, toggleImageModal} = useModalsContext();

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        component={PrivateMessages}
        name="PrivateMessages"
        options={{
          header: () => (
            <Header
              title={'Private Messages'}
              headerRight={
                <TouchableWithoutFeedback onPress={toggleAddNewMessage}>
                  <Icon name={'plus-circle'} size={30} color={'#E96479'} />
                </TouchableWithoutFeedback>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        component={PrivateMessage}
        name="PrivateMessage"
        options={{
          header: ({route}) => (
            <Header
              headerLeft={
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('PrivateMessages')}>
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
                      <TouchableWithoutFeedback onPress={toggleImageModal} >
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

export default PrivateNavigation;
