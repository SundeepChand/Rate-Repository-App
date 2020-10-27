import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

export default function useRepositories() {

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (!data) {
    return { repositories: null, loading, error };
  }

  return { repositories: data.repositories, loading, error };
}
