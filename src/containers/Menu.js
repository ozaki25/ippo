import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';

import useFirebase from 'src/hooks/useFirebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Menu from 'src/components/pages/Menu';
import useAuthorization from 'src/hooks/useAuthorization';
import withTab from 'src/hoc/withTab';
import paging from 'src/constants/paging';

const WithMenu = compose(withTab)(MenuContainer);

function MenuContainer(props) {
  useAuthorization();
  const { uid } = props.authUser;
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, refetch } = useQuery(query.allEvents, {
    variables: { uid, limit: paging.eventsPerPageForMenu },
  });
  const { data: fetchUserData, refetch: fetchUserrefetch } = useQuery(
    query.fetchUser,
    {
      variables: { uid },
    },
  );
  const [createEvent] = useMutation(mutation.createEvent);
  return (
    <Menu
      {...props}
      history={history}
      firebase={firebase}
      data={{ ...data, loading, refetch }}
      user={{ ...fetchUserData, refetch: fetchUserrefetch }}
      createEvent={createEvent}
    />
  );
}

export default WithMenu;
