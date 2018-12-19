import { compose, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import query from 'src/graphql/query';
import Menu from 'src/components/pages/Menu/';
import paging from 'src/constants/paging';

export default compose(
  graphql(query.internalEvents, { name: 'internal' }),
  graphql(query.connpassEvents, {
    options: props => ({ variables: { page: 1, count: paging.eventsPerPage } }),
    name: 'external',
  }),
)(withRouter(Menu));
