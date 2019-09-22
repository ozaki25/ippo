import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import query from 'graphql/query';
import ExternalEvents from 'components/pages/ExternalEvents/';
import { withAuthorization } from 'hoc/Sessions';
import paging from 'constants/paging';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.externalEvents, {
    options: () => ({ variables: { limit: paging.eventsPerPage } }),
  }),
)(ExternalEvents);
