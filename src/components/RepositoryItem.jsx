import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import theme from '../../themes';

import Text from './Text';
import LanguageCard from './LanguageCard';
import InfoCard from './InfoCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginBottom: 10,
    padding: 10,
  },
  avatarImage: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  textDescription: {
    marginBottom: 14,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerRow}>
        <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.avatarImage} />
        <View>
          <Text color="textBlack" fontSize="heading" fontWeight="bold">{repository.fullName}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <LanguageCard>{repository.language}</LanguageCard>
            <View style={{ flexGrow: 1 }}><Text></Text></View>
          </View>
        </View>
      </View>
      <Text
        color="textSecondary"
        fontSize="subheading"
        style={styles.textDescription}
      >
        {repository.description}
      </Text>

      <View style={styles.flexContainerRow}>
        <InfoCard title={"Forks"} num={repository.forksCount} />
        <InfoCard title={"Stars"} num={repository.stargazersCount} />
        <InfoCard title={"Ratings"} num={repository.ratingAverage} />
        <InfoCard title={"Reviews"} num={repository.reviewCount} />
      </View>
    </View>
  );
};

export default RepositoryItem;
