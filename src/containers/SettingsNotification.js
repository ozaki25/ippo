import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutation';
import SettingsNotification from 'src/components/pages/SettingsNotification/';
import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import withNotification from 'src/hoc/withNotification';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withNotification,
  graphql(mutation.registerNotification, { name: 'registerNotification' }),
  graphql(mutation.unregisterNotification, { name: 'unregisterNotification' }),
)(SettingsNotification);
