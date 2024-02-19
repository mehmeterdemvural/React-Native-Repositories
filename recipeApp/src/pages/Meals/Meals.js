import React, {useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';

import useFetch from '../../hooks/useFetch';
import {REACT_APP_API_URL} from '@env';
import SearchBar from '../../components/SearchBar';
import MealsCard from '../../components/MealsCard';
import {styles} from './Meals.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Meals({route, navigation}) {
  const [searchArea, setSearchArea] = useState('');
  const categoryTitle = route.params;
  const {fetchData, loading, error} = useFetch(
    `${REACT_APP_API_URL}filter.php?c=${categoryTitle}`,
  );

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }
  const meals = fetchData.meals;
  const filtred = meals.filter(item => {
    const searchText = searchArea.toLowerCase();
    const title = item.strMeal.toLowerCase();
    return title.indexOf(searchText) > -1;
  });
  const handleSelect = mealId => {
    navigation.navigate('DetailPage', mealId);
  };

  const renderMeals = ({item}) => (
    <MealsCard meal={item} onSelect={() => handleSelect(item.idMeal)} />
  );

  return (
    <SafeAreaView style={styles.continer}>
      <SearchBar
        customPlaceholder={`Find in ${categoryTitle} Meals...`}
        setSearchArea={setSearchArea}
      />
      <FlatList
        data={filtred}
        renderItem={renderMeals}
        style={styles.flatList}
        contentContainerStyle={{paddingBottom: 30}}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default Meals;
