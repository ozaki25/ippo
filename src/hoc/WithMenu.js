import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import Menu from 'src/components/pages/Menu/';
import paging from 'src/constants/paging';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.internalEvents, { name: 'internal' }),
  graphql(query.externalEvents, {
    options: props => ({ variables: { page: 1, count: paging.eventsPerPage } }),
    name: 'external',
  }),
)(Menu);
