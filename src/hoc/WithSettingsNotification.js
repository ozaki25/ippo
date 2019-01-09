import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import SettingsNotification from 'src/components/pages/SettingsNotification/';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(SettingsNotification);
