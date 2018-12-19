import { compose, graphql } from 'react-apollo';
import query from 'src/graphql/query';
import ExternalEvents from 'src/components/pages/ExternalEvents/';
import paging from 'src/constants/paging';

export default compose(
  graphql(query.externalEvents, {
    options: props => ({ variables: { page: 1, count: paging.eventsPerPage } }),
  }),
  graphql(query.registerNotification, { name: 'registerNotification' }),
)(ExternalEvents);
