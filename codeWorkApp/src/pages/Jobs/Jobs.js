import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';

import {styles} from './Jobs.styles';
import useFetch from '../../hooks/useFetch';
import LoadingPage from '../../components/LoadingPage';
import ErrorPage from '../../components/ErrorPage';
import JobsCard from '../../components/JobsCard';
import {useFavoriteContext} from '../../contexts/FavoriteContext';
import {useSubmitContext} from '../../contexts/SubmitContext';
import {useAuth} from '../../contexts/AuthContext';

function Jobs({navigation}) {
  const {isFavoriteLoading} = useFavoriteContext();
  const {isSubLoading} = useSubmitContext();
  const {initialLoading} = useAuth();
  const {fetchData, fetchError, fetchLoading, workFetch} = useFetch();
  const [page, setPage] = useState(1);

  const handleLoadMore = data => {
    setPage(prev => prev + data);
    workFetch(`https://www.themuse.com/api/public/jobs?page=${page}`);
  };

  useEffect(() => {
    workFetch(`https://www.themuse.com/api/public/jobs?page=${page}`);
  }, []);

  const renderJobs = ({item}) => {
    return (
      <JobsCard jobs={item} handlePress={() => handleJobsSelect(item.id)} />
    );
  };
  const handleJobsSelect = id => {
    navigation.navigate('JobDetailPage', id);
  };

  if (fetchLoading || isFavoriteLoading || isSubLoading) {
    return <LoadingPage />;
  } else if (fetchError) {
    return <ErrorPage />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={fetchData.results}
        renderItem={renderJobs}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 5}}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={
          <View style={styles.footer}>
            <TouchableOpacity
              disabled={page <= 1}
              onPress={() => {
                handleLoadMore(-1);
              }}
              style={styles.pageBtn}>
              <Text style={styles.pageBtnText}>Previous Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleLoadMore(+1);
              }}
              style={styles.pageBtn}>
              <Text style={styles.pageBtnText}>Next Page</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

export default Jobs;
