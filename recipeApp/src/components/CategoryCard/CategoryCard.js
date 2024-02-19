import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import {styles} from './CategoryCard.styles';

function CategoryCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.categoryImage}
            source={{uri: category.strCategoryThumb}}
          />
        </View>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryText}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
