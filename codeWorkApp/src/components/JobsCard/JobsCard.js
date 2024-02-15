import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './JobsCard.styles';
import {useFavoriteContext} from '../../contexts/FavoriteContext';
import {useSubmitContext} from '../../contexts/SubmitContext';

function JobsCard({jobs, handlePress}) {
  const {favorite} = useFavoriteContext();
  const {subValues} = useSubmitContext();
  const findIsFavorite = favorite.find(favItem => favItem.id === jobs.id);
  const findIsSubmit = subValues.find(subItem => subItem.id === jobs.id);
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.header}>{jobs.name}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Category</Text>
          <Text style={styles.item}>
            : {jobs.categories[0] ? jobs.categories[0].name : 'Unknown'}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Company</Text>
          <Text style={styles.item}>: {jobs.company.name}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.item}>: {jobs.locations[0].name}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomInnerContainer}>
            {findIsFavorite ? (
              <>
                <Icon
                  style={findIsFavorite && styles.buttonIcon}
                  name="favorite"
                  size={12}
                />
                <Text style={styles.iconText}>inFav</Text>
              </>
            ) : null}
          </View>
          <View style={styles.bottomInnerContainer}>
            {findIsSubmit ? (
              <>
                <Icon
                  style={findIsSubmit && styles.buttonIcon}
                  name="done"
                  size={12}
                />
                <Text style={styles.iconText}>Applied</Text>
              </>
            ) : null}
          </View>
          <View>
            <Text style={styles.level}>{jobs.levels[0].name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobsCard;
