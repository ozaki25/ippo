import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import Menu from 'src/components/pages/Menu';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.allEvents, {
    options: ({ authUser: { uid } }) => ({
      variables: { uid, limit: paging.eventsPerPageForMenu },
    }),
  }),
  graphql(query.createEvent, { name: 'createEvent' }),
)(Menu);