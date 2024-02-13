import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './NewsCard.style';

function NewsCard({news}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(news.id);
      }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: news.imageURL}} />
        <Text style={styles.title}>{news.headline}</Text>
        <Text style={styles.description}>
          {'\t'}
          {news.abstract}
        </Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default NewsCard;
