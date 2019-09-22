import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import query from 'graphql/query';
import JoinedEvents from 'components/pages/JoinedEvents/';
import { withAuthorization } from 'hoc/Sessions';
import paging from 'constants/paging';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.joinedEvents, {
    options: ({ authUser: { uid } }) => ({ variables: { uid, limit: paging.eventsPerPage } }),
  }),
)(JoinedEvents);
