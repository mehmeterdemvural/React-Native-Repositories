import {useState} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Navigation
import {SettingDrawNavigation} from './SettingDrawNavigation';
import GroupsNavigation from './GroupsNavigation';
import PrivateNavigation from './PrivateNavigation';

// Pages
import AllMessages from '../pages/Messages/AllMessages';

//Components
import Header from '../components/Header';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const inActive = {color: '#E96479', iconSize: 15, textSize: 12};
  const active = {color: '#7DB9B6', iconSize: 20, textSize: 15};
  const [allMessagesValues, setAllMessagesValues] = useState(inActive);
  const [groupValues, setGroupValues] = useState(inActive);
  const [privMessagesValues, setPrivMessagesValues] = useState(inActive);
  const [profileValues, setProfileValues] = useState(inActive);

  return (
    <Tab.Navigator
      initialRouteName="AllMessagesPage"
      screenOptions={{
        tabBarActiveBackgroundColor: '#4D455D',
        tabBarInactiveBackgroundColor: '#F5E9CF',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: '#7DB9B6'},
      }}>
      <Tab.Screen
        name="AllMessagesPage"
        component={AllMessages}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: allMessagesValues.color,
                fontSize: allMessagesValues.textSize,
              }}>
              All
            </Text>
          ),
          tabBarIcon: () => (
            <Icon
              name="message"
              size={allMessagesValues.iconSize}
              color={allMessagesValues.color}
            />
          ),
          header: () => <Header title={'All Messages'} />,
        }}
        listeners={{
          state: () => setAllMessagesValues(active),
          blur: () => setAllMessagesValues(inActive),
        }}
      />

      <Tab.Screen
        name="GroupsNavigation"
        component={GroupsNavigation}
        options={{
          headerShown: false,
          tabBarLabel: () => (
            <Text
              style={{
                color: groupValues.color,
                fontSize: groupValues.textSize,
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              Groups
            </Text>
          ),
          tabBarIcon: () => (
            <Icon
              name="forum"
              size={groupValues.iconSize}
              color={groupValues.color}
            />
          ),
        }}
        listeners={{
          state: () => setGroupValues(active),
          blur: () => setGroupValues(inActive),
        }}
      />
      <Tab.Screen
        name="PrivateNavigation"
        component={PrivateNavigation}
        options={{
          headerShown: false,
          tabBarLabel: () => (
            <Text
              style={{
                color: privMessagesValues.color,
                fontSize: privMessagesValues.textSize,
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              Private
            </Text>
          ),
          tabBarIcon: () => (
            <Icon
              name="shield-account-outline"
              size={privMessagesValues.iconSize}
              color={privMessagesValues.color}
            />
          ),
        }}
        listeners={{
          state: () => setPrivMessagesValues(active),
          blur: () => setPrivMessagesValues(inActive),
        }}
      />

      <Tab.Screen
        name="ProfilePage"
        component={SettingDrawNavigation}
        options={{
          headerShown: false,
          tabBarLabel: () => (
            <Text
              style={{
                color: profileValues.color,
                fontSize: profileValues.textSize,
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: () => (
            <Icon
              name="account"
              size={profileValues.iconSize}
              color={profileValues.color}
            />
          ),
        }}
        listeners={{
          state: () => setProfileValues(active),
          blur: () => setProfileValues(inActive),
        }}
      />
    </Tab.Navigator>
  );
};

export {TabNavigation};
