import { graphql } from '@apollo/react-hoc';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Notification from 'src/components/pages/Notification';
import { withAuthorization } from 'src/hoc/Sessions';

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
