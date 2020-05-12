import React from 'react';
import propTypes from 'prop-types';
import OverlaySpinner from 'src/components/molecules/OverlaySpinner';
import SignupForm from 'src/components/organisms/SignupForm';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';

class Signup extends React.Component {
  state = { loading: false };

  signup = async ({ data: { email, pass, name, categories } }) => {
    sessionStorage.setItem('authUser', JSON.stringify({ name, categories }));
    await this.props.firebase.doCreateUserWithEmailAndPassword(email, pass);
    this.props.history.replace(ROUTES.Menu);
  };

  render() {
    const { history, firebase } = this.props;
    return (
      <Container title="新規登録" back history={history} firebase={firebase}>
        <SignupForm onSubmit={this.signup} />
        <OverlaySpinner visible={this.state.loading} />
      </Container>
    );
  }
}

Signup.displayName = 'Signup';

Signup.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    doSignInWithEmailAndPassword: propTypes.func.isRequired,
  }).isRequired,
};

Signup.defaultProps = {};

export default Signup;
