import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {styles} from './Detail.styles';
import useFetch from '../../hooks/useFetch';
import {REACT_APP_API_URL} from '@env';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Detail({route}) {
  const mealId = route.params;
  const {loading, error, fetchData} = useFetch(
    `${REACT_APP_API_URL}lookup.php?i=${mealId}`,
  );

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }
  const meal = fetchData.meals[0];
  const url = meal.strYoutube;

  const handlePressUrl = async () => {
    await Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: meal.strMealThumb}} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.area}>{meal.strArea}</Text>
      <View style={styles.divider} />
      <Text style={styles.desc}>{meal.strInstructions}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePressUrl}>
        <Text style={styles.buttonText}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Detail;
