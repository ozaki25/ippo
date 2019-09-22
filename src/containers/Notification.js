import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import query from 'graphql/query';
import mutation from 'graphql/mutation';
import Notification from 'components/pages/Notification';
import { withAuthorization } from 'hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.fetchUser, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
    name: 'user',
  }),
  graphql(mutation.readNotification, { name: 'readNotification' }),
)(Notification);
