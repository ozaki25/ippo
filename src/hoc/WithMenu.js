import { compose as apolloCompose, graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import query from 'src/graphql/query';
import Menu from 'src/components/pages/Menu/';
import paging from 'src/constants/paging';
import { WithAuthorization } from 'src/hoc/Sessions';

export default compose(WithAuthorization())(
  apolloCompose(
    graphql(query.internalEvents, { name: 'internal' }),
    graphql(query.externalEvents, {
      options: props => ({ variables: { page: 1, count: paging.eventsPerPage } }),
      name: 'external',
    }),
  )(withRouter(Menu)),
);
