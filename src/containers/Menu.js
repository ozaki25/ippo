import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import query from 'graphql/query';
import mutation from 'graphql/mutation';
import Menu from 'components/pages/Menu';
import { withAuthorization } from 'hoc/Sessions';
import withTab from 'hoc/withTab';
import paging from 'constants/paging';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withTab,
  graphql(query.allEvents, {
    options: ({ authUser: { uid } }) => ({
      variables: { uid, limit: paging.eventsPerPageForMenu },
    }),
  }),
  graphql(query.fetchUser, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
    name: 'user',
  }),
  graphql(mutation.createEvent, { name: 'createEvent' }),
)(Menu);
