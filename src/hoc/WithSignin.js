import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import { compose } from 'recompose';
import Signin from 'src/components/pages/Signin';

export default compose(
  withRouter,
  withFirebase,
)(Signin);
