import React from 'react';
import { Text, View } from 'react-native';

const RepositoryItem = ({ repository }) => {
  return (
    <View>
      <Text>Fullname: {repository.fullName}</Text>
      <Text>Description: {repository.description}</Text>
      <Text>Language: {repository.language}</Text>
      <Text>Forks: {repository.forksCount}</Text>
      <Text>Stars: {repository.stargazersCount}</Text>
      <Text>Ratings: {repository.ratingAverage}</Text>
      <Text>Reviews: {repository.reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;
