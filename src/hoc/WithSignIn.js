import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';

import SignIn from 'src/components/pages/SignIn/';

export default withRouter(withFirebase(SignIn));
