import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import ExternalEvents from 'src/components/pages/ExternalEvents/';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.externalEvents),
)(ExternalEvents);
