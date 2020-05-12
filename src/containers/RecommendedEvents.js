import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import RecommendedEvents from 'src/components/pages/RecommendedEvents/';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.recommendedEvents, {
    options: ({ authUser: { uid } }) => ({
      variables: { uid, limit: paging.eventsPerPage },
    }),
  }),
)(RecommendedEvents);
