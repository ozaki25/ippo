import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button, Intent } from '@blueprintjs/core';
import ROUTES from 'src/constants/routes';
import Container from 'src/components/templates/Container';
import SigninForm from 'src/components/organisms/SigninForm';
import SignupFormDialog from 'src/components/organisms/SignupFormDialog';
import OverlaySpinner from 'src/components/molecules/OverlaySpinner';
import GoogleButton from 'src/components/atoms/GoogleButton';

const ButtonContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const LinkContainer = styled.div`
  font-size: 120%;
  text-align: center;
`;

class Signin extends React.Component {
  state = { isOpen: false, loading: false };

  componentWillMount() {
    const key = sessionStorage.getItem('willRedirect');
    if (key) {
      sessionStorage.removeItem('willRedirect');
      this.redirectResult();
    }
  }

  redirectResult = async () => {
    this.setState({ loading: true });
    const result = await this.props.firebase.auth.getRedirectResult();
    const authUser = result.user;
    if (authUser) {
      this.props.history.push(ROUTES.Menu);
    }
    this.setState({ loading: false });
  };

  toggleDialog = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  signin = async ({ data: { email, pass } }) => {
    await this.props.firebase.doSignInWithEmailAndPassword(email, pass);
    this.props.history.push(ROUTES.Menu);
  };

  signup = async ({ data: { email, pass, name } }) => {
    sessionStorage.setItem('authUser', JSON.stringify({ name }));
    await this.props.firebase.doCreateUserWithEmailAndPassword(email, pass);
    this.props.history.push(ROUTES.Menu);
  };

  signinWithGoogle = async () => {
    try {
      sessionStorage.setItem('willRedirect', 'true');
      this.props.firebase.doSignInWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <Container>
        <SigninForm onSubmit={this.signin} />
        <ButtonContainer>
          <GoogleButton onClick={this.signinWithGoogle} />
        </ButtonContainer>
        <LinkContainer>
          <Button onClick={this.toggleDialog} intent={Intent.PRIMARY} minimal large>
            新規登録
          </Button>
        </LinkContainer>
        <SignupFormDialog
          isOpen={this.state.isOpen}
          onSubmit={this.signup}
          onClose={this.toggleDialog}
        />
        <OverlaySpinner loading={this.state.loading} />
      </Container>
    );
  }
}

Signin.displayName = 'Signin';

Signin.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    doSignInWithEmailAndPassword: propTypes.func.isRequired,
  }).isRequired,
};

Signin.defaultProps = {};

export default Signin;
