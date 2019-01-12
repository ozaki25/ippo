import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import JoinedEvents from 'src/components/pages/JoinedEvents/';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.joinedEvents, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
  }),
)(JoinedEvents);
