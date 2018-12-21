import { compose as apolloCompose, graphql } from 'react-apollo';
import { compose } from 'recompose';
import query from 'src/graphql/query';
import ExternalEvents from 'src/components/pages/ExternalEvents/';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';

export default compose(withAuthorization)(
  apolloCompose(
    graphql(query.externalEvents, {
      options: props => ({ variables: { page: 1, count: paging.eventsPerPage } }),
    }),
    graphql(query.registerNotification, { name: 'registerNotification' }),
  )(ExternalEvents),
);
