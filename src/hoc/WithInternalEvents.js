import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import InternalEvents from 'src/components/pages/InternalEvents/';

export default graphql(query.internalEvents)(InternalEvents);
