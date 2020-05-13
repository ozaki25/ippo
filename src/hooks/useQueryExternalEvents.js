import { useQuery } from '@apollo/client';
import query from 'src/graphql/query';
import paging from 'src/constants/paging';

function useQueryExternalEvents() {
  const { loading, error, data, refetch, fetchMore } = useQuery(
    query.externalEvents,
    {
      variables: { limit: paging.eventsPerPage },
    },
  );
  return { ...data, loading, error, refetch, fetchMore };
}

export default useQueryExternalEvents;
