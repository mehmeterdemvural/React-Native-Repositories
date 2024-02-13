import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';

// Hooks
import useFetch from '../hooks/useFetch';

// Components
import Loading from '../components/Loading/Loading';
import NewsCard from '../components/NewsCard/NewsCard';
import Scroll from '../components/Scroll/Scroll';

const Homepage = ({navigation}) => {
  const renderNews = ({item}) => (
    <NewsCard news={item} navigation={navigation} />
  );
  const keyExtract = (item, index) => item.id.toString();

  const {data, loading} = useFetch(
    'https://fakenews.squirro.com/news/sport?count=20',
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        News App
      </Text>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          ListHeaderComponent={Scroll}
          keyExtractor={keyExtract}
          data={data}
          renderItem={renderNews}
          ListEmptyComponent={<Text style={{fontSize: 30}}>Data is empty</Text>}
          ListFooterComponent={
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                backgroundColor: 'red',
              }}>
              The news is over. Follow for more
            </Text>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Homepage;
