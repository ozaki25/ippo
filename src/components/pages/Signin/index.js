import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button, Classes, Dialog, Intent } from '@blueprintjs/core';
import ROUTES from 'src/constants/routes';
import Container from 'src/components/templates/Container';
import BasicAuthForm from 'src/components/organisms/BasicAuthForm';
import GoogleButton from 'src/components/atoms/GoogleButton';

const styles = {
  dialog: {
    margin: '0 15px',
  },
};

const ButtonContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const LinkContainer = styled.div`
  font-size: 120%;
  text-align: center;
`;

class Signin extends React.Component {
  state = { isOpen: false };

  async componentDidMount() {
    const result = await this.props.firebase.auth.getRedirectResult();
    if (result.user) this.props.history.push(ROUTES.Menu);
  }

  toggleDialog = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  signin = async ({ data: { email, pass } }) => {
    await this.props.firebase.doSignInWithEmailAndPassword(email, pass);
    this.props.history.push(ROUTES.Menu);
  };

  signup = async ({ data: { email, pass } }) => {
    await this.props.firebase.doCreateUserWithEmailAndPassword(email, pass);
    this.props.history.push(ROUTES.Menu);
  };

  signinWithGoogle = async () => {
    await this.props.firebase.doSignInWithGoogle().catch(e => console.log(e));
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <Container>
        <BasicAuthForm onSubmit={this.signin} buttonText="ログイン" />
        <ButtonContainer>
          <GoogleButton onClick={this.signinWithGoogle} />
        </ButtonContainer>
        <LinkContainer>
          <Button onClick={this.toggleDialog} intent={Intent.PRIMARY} minimal large>
            新規登録
          </Button>
        </LinkContainer>
        <Dialog
          title="ユーザ登録"
          isOpen={this.state.isOpen}
          onClose={this.toggleDialog}
          style={styles.dialog}
          isCloseButtonShown
        >
          <div className={Classes.DIALOG_BODY}>
            <BasicAuthForm buttonText="登録" onSubmit={this.signup} />
          </div>
        </Dialog>
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
