import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import query from 'src/graphql/query';
import NewEvent from 'src/components/pages/NewEvent/';

export default withRouter(graphql(query.createEvent, { name: 'createEvent' })(NewEvent));
