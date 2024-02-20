import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, TouchableOpacity} from 'react-native';

//Contexts
import {useAuth} from '../contexts/AuthContext';
import {useModalsContext} from '../contexts/ModalsContext';

//Pages
import Profile from '../pages/Profile';
import Header from '../components/Header';

const SettingDrawNavigation = () => {
  const {user, signoutFunc} = useAuth();
  const {toggleImageModal} = useModalsContext();

  const Drawer = createDrawerNavigator();

  const logout = async () => {
    await signoutFunc();
  };

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sign Out"
          onPress={() => logout()}
          inactiveTintColor={'#E96479'}
          icon={() => <Icon name={'logout'} size={25} />}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        header: () => (
          <Header
            title={'Profile'}
            headerRight={
              <Icon
                name="cog"
                onPress={navigation.toggleDrawer}
                size={25}
                color="#4D455D"
                style={{marginRight: 5}}
              />
            }
          />
        ),

        drawerPosition: 'right',
        headerLeft: () => (
          <TouchableOpacity onPress={toggleImageModal}>
            <Image
              style={{width: 25, height: 25, borderRadius: 12.5, marginLeft: 5}}
              source={{uri: user.profilePhotoURL}}
            />
          </TouchableOpacity>
        ),
        headerTitle: `${user.firstName} ${user.lastName}`,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#7DB9B6', height: 30},
        drawerStyle: {backgroundColor: '#F5E9CF'},
        drawerActiveTintColor: '#7DB9B6',
        drawerInactiveTintColor: '#E96479',
        drawerActiveBackgroundColor: '#4D455D',
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export {SettingDrawNavigation};
