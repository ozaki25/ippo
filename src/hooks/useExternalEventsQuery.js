import { useQuery } from '@apollo/client';
import query from 'src/graphql/query';
import paging from 'src/constants/paging';

function useExternalEventsQuery() {
  const { loading, error, data, refetch, fetchMore } = useQuery(
    query.externalEvents,
    {
      variables: { limit: paging.eventsPerPage },
    },
  );
  return { data: { ...data, loading, error, refetch, fetchMore } };
}

export default useExternalEventsQuery;
