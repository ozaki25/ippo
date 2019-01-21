import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import mutation from 'src/graphql/mutation';
import NewEvent from 'src/components/pages/NewEvent/';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(mutation.createEvent, { name: 'createEvent' }),
)(NewEvent);
