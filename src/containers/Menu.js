import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Menu from 'src/components/pages/Menu';
import { withAuthorization } from 'src/hoc/Sessions';
import withTab from 'src/hoc/withTab';
import paging from 'src/constants/paging';

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
