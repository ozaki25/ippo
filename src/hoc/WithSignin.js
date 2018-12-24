import { compose as apolloCompose, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import { compose } from 'recompose';
import query from 'src/graphql/query';
import Signin from 'src/components/pages/Signin';

export default compose(
  withRouter,
  withFirebase,
)(apolloCompose(graphql(query.createUser, { name: 'createUser' }))(Signin));
