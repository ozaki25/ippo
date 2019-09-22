import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import { compose } from 'recompose';
import mutation from 'graphql/mutation';
import Admin from 'components/pages/Admin';

export default compose(
  withFirebase,
  withRouter,
  graphql(mutation.publishNotification, { name: 'publishNotification' }),
  graphql(mutation.registerNotification, { name: 'registerNotification' }),
  graphql(mutation.excuteUpdateExternalEvents, { name: 'excuteUpdateExternalEvents' }),
)(Admin);
