import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import Hello from 'src/components/pages/Hello';

export default graphql(query.hello)(Hello);
