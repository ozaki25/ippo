import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import mutation from 'graphql/mutation';
import NewEvent from 'components/pages/NewEvent/';
import { withAuthorization } from 'hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(mutation.createEvent, { name: 'createEvent' }),
)(NewEvent);
