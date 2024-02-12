import React, {useState, useEffect, useRef} from 'react';

import {SafeAreaView, Platform, StyleSheet} from 'react-native';
import MapView, {Marker, enableLatestRenderer} from 'react-native-maps';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import useFetch from './hooks/useFetch.js';
import Loading from './components/Loading/Loading.jsx';
import CustomMarker from './components/Marker/CustomMarker.jsx';
import InfoCard from './components/cards/InfoCard';
enableLatestRenderer();
const App = () => {
  const {data, loading} = useFetch(
    'https://random-data-api.com/api/v2/users?size=50',
  );

  const mapRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);

  const [initialLoading, setInitialLoading] = useState(true);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const style = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const renderUserMarker = () => {
    return data.map(
      ({
        address: {coordinates},
        id,
        avatar,
        first_name,
        last_name,
        email,
        username,
      }) => {
        return (
          <CustomMarker
            key={id}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}
            userImage={avatar}
            onSelect={() => {
              handleMapPress(coordinates, {
                first_name,
                last_name,
                username,
                avatar,
                email,
              });
            }}
          />
        );
      },
    );
  };

  const handleMapPress = (coor, userInfo) => {
    setUser(userInfo);
    handleModal();
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  };

  const [location, setLocation] = useState(null);

  useEffect(() => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ).then(result => {
      if (result === RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            return setLocation({
              latitude: position?.coords?.latitude,
              longitude: position?.coords?.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            });
          },
          err => {
            console.log(err.code, err.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    setInitialLoading(false);
  }, [initialLoading]);

  if (initialLoading) {
    return <Loading key={1} />;
  }
  return (
    <SafeAreaView style={style.container}>
      <MapView
        provider="google"
        style={style.container}
        ref={mapRef}
        initialRegion={location}>
        {location && <Marker coordinate={location} title="You are here" />}
        {data && renderUserMarker()}
      </MapView>
      {user && (
        <InfoCard visible={modalVisible} close={handleModal} user={user} />
      )}
      {loading && <Loading key={2} />}
    </SafeAreaView>
  );
};

export default App;
