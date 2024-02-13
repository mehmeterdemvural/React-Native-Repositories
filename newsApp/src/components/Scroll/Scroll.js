import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import new_banner_data from '../../data/news_banner_data.json';
import styles from './Scroll.style';

function Scroll() {
  return (
    <ScrollView
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}>
      {new_banner_data.map((bannerNews, key) => (
        <Image
          key={key}
          style={styles.image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
}

export default Scroll;
