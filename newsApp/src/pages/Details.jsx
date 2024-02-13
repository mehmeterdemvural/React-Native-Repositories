import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Details = ({route, navigation}) => {
  const {news} = route.params;
  return (
    <ScrollView>
      <Image
        style={{height: 200, marginTop: 10}}
        source={{uri: news.imageURL}}
      />
      <Text
        style={{marginTop: 20, fontWeight: 'bold', fontSize: 18, padding: 10}}>
        {news.headline}
      </Text>
      <Text
        style={{
          fontSize: 12,
          padding: 10,
          textAlign: 'justify',
        }}>
        {news.body}
      </Text>
      <Text
        style={{
          textAlign: 'right',
          marginBottom: 50,
          marginTop: 20,
          paddingRight: 20,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        {news.author}
      </Text>
    </ScrollView>
  );
};

export default Details;
