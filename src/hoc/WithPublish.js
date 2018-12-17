import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import Publish from 'src/components/pages/Publish';

export default graphql(query.publishNotification, { name: 'publishNotification' })(Publish);
