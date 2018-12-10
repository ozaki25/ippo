import { compose, graphql } from 'react-apollo';
import query from 'src/graphql/query';
import Hello from 'src/components/pages/Hello';

export default compose(
  graphql(query.hello),
  graphql(query.publishNotification, { name: 'publishNotification' }),
  graphql(query.registerSubscriber, { name: 'registerSubscriber' }),
)(Hello);
