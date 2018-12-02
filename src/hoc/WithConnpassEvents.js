import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import Events from 'src/components/pages/Events/';

export default graphql(query.connpassEvents)(Events);
