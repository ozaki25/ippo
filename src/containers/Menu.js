import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import Menu from 'src/components/pages/Menu';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.internalEvents, { name: 'internal' }),
  graphql(query.externalEvents, {
    name: 'external',
    options: () => ({ variables: { limit: 10 } }),
  }),
  graphql(query.joinedEvents, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
    name: 'joined',
  }),
  graphql(query.organizedEvents, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
    name: 'organized',
  }),
  graphql(query.createEvent, { name: 'createEvent' }),
)(Menu);
