import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {styles} from './Detail.styles';
import useFetch from '../../hooks/useFetch';
import Loading from '../../componets/Loading';
import Error from '../../componets/Error';
import {REACT_APP_API_URL} from '@env';

function Detail({route}) {
  const id = route.params;
  const {fetchData, loading, error} = useFetch(`${REACT_APP_API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View styles={styles.container}>
      <Image style={styles.image} source={{uri: fetchData.image}} />
      <ScrollView style={styles.bodyContainer}>
        <Text style={styles.title}>{fetchData.title}</Text>
        <Text style={styles.description}>
          {'\t'}
          {'\t'}
          {fetchData.description}
        </Text>
        <Text style={styles.price}>{fetchData.price} ₺</Text>
      </ScrollView>
    </View>
  );
}

export default Detail;
