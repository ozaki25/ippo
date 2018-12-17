import { compose, graphql } from 'react-apollo';
import query from 'src/graphql/query';
import Events from 'src/components/pages/Events/';
import paging from 'src/constants/paging';

export default compose(
  graphql(query.internalEvents, { name: 'internalEvents' }),
  graphql(query.connpassEvents, {
    options: props => ({ variables: { page: 1, count: paging.eventsPerPage } }),
    name: 'connpassEvents',
  }),
  graphql(query.registerNotification, { name: 'registerNotification' }),
)(Events);
