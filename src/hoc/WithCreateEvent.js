import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import NewEvent from 'src/components/pages/NewEvent/';

export default graphql(query.createEvent, { name: 'createEvent' })(NewEvent);
