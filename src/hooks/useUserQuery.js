import { useQuery } from '@apollo/client';
import query from 'src/graphql/query';

function useUserQuery() {
  const { loading, error, data, refetch, fetchMore } = useQuery(
    query.fetchUser,
  );
  return { ...data, loading, error, refetch, fetchMore };
}

export default useUserQuery;
