import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';

import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Menu from 'src/components/pages/Menu';
import { withAuthorization } from 'src/hoc/Sessions';
import withTab from 'src/hoc/withTab';
import paging from 'src/constants/paging';

const WithMenu = compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withTab,
)(MenuContainer);

function MenuContainer(props) {
  const { uid } = props.authUser;
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
      data={{ ...data, loading, refetch }}
      user={{ ...fetchUserData, refetch: fetchUserrefetch }}
      createEvent={createEvent}
    />
  );
}

export default WithMenu;
