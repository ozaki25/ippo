import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import { compose } from 'recompose';
import query from 'src/graphql/query';
import Publish from 'src/components/pages/Publish';

export default compose(
  withFirebase,
  withRouter,
  graphql(query.publishNotification, { name: 'publishNotification' }),
)(Publish);
