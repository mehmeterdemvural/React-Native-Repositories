import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import {styles} from './MealsCard.styles';

function MealsCard({meal, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.mealContainer}>
        <ImageBackground
          style={styles.mealImageBackground}
          source={{uri: meal.strMealThumb}}
          resizeMode={'contain'}>
          <Text style={styles.mealText}>
            {meal.strMeal.length > 20
              ? meal.strMeal.substring(0, 20) + ' ...'
              : meal.strMeal}
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealsCard;
