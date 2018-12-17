import { compose, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import query from 'src/graphql/query';
import InternalEvents from 'src/components/pages/InternalEvents/';

export default withRouter(
  compose(
    graphql(query.internalEvents),
    graphql(query.registerNotification, { name: 'registerNotification' }),
  )(InternalEvents),
);
