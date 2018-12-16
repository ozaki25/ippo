import { compose, graphql } from 'react-apollo';
import query from 'src/graphql/query';
import InternalEvents from 'src/components/pages/InternalEvents/';

export default compose(
  graphql(query.internalEvents),
  graphql(query.registerNotification, { name: 'registerNotification' }),
)(InternalEvents);
