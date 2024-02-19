import React, {useState} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';

import useFetch from '../../hooks/useFetch';
import {REACT_APP_API_URL} from '@env';
import {styles} from './Categories.styles';
import CategoryCard from '../../components/CategoryCard';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Categories({navigation}) {
  const {loading, fetchData, error} = useFetch(
    `${REACT_APP_API_URL}categories.php`,
  );
  const [searchArea, setSearchArea] = useState('');

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  const handleCategorySelect = categoryTitle => {
    navigation.navigate('MealsPage', categoryTitle);
  };

  const filtred = fetchData.categories.filter(item => {
    let title = item.strCategory.toLowerCase();
    let textArea = searchArea.toLowerCase();
    return title.indexOf(textArea) > -1;
  });

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );
  return (
    <View style={styles.continer}>
      <SearchBar
        setSearchArea={setSearchArea}
        customPlaceholder={'Find in Categories...'}
      />

      <FlatList
        style={styles.flatList}
        data={filtred}
        renderItem={renderCategory}
        contentContainerStyle={{paddingBottom: 30}}
      />
    </View>
  );
}

export default Categories;
