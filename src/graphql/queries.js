import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        cursor
        node {
          id
          name
          fullName
          ownerAvatarUrl
          language
          description
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
        }
      }
    }
  }
`;
