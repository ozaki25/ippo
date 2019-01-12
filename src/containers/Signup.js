import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import { compose } from 'recompose';
import Signup from 'src/components/pages/Signup';

export default compose(
  withRouter,
  withFirebase,
)(Signup);
