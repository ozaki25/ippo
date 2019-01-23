import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import GoogleButton from 'src/components/atoms/GoogleButton';
import OverlaySpinner from 'src/components/molecules/OverlaySpinner';
import SigninForm from 'src/components/organisms/SigninForm';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';
import webAuthentication from 'src/utils/webAuthentication';

const styles = {
  nonCaps: {
    textTransform: 'none',
  },
};

const ButtonContainer = styled.div`
  margin: 8px 0;
  text-align: center;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 60px 0 30px;
`;

const StyledImg = styled.img`
  max-width: 60%;
`;

class Signin extends React.Component {
  state = { loading: false };

  componentWillMount() {
    const key = sessionStorage.getItem('willRedirect');
    if (key) {
      sessionStorage.removeItem('willRedirect');
      this.redirectResult();
    } else {
      this.props.firebase.doSignOut();
    }
  }

  redirectResult = async () => {
    this.setState({ loading: true });
    const result = await this.props.firebase.auth.getRedirectResult();
    const authUser = result.user;
    this.setState({ loading: false });
    if (authUser) {
      this.props.history.replace(ROUTES.Menu);
    }
  };

  signin = async ({ data: { email, pass } }) => {
    await this.props.firebase.doSignInWithEmailAndPassword(email, pass);
    this.props.history.replace(ROUTES.Menu);
  };

  signinWithGoogle = async () => {
    try {
      sessionStorage.setItem('willRedirect', 'true');
      this.props.firebase.doSignInWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

  webauthSignin = async () => {
    const { rawId, uid } = this.props;
    if (!rawId) {
      alert('認証情報の登録が確認できませんでした。');
      return;
    }
    const result = await webAuthentication.runAssertion(rawId);
    if (result) {
      const {
        data: { fetchUser },
      } = await this.props.fetchUser.refetch({ uid });
      localStorage.setItem('authUser', JSON.stringify(fetchUser));
      this.props.onSetAuthUser(fetchUser);
      this.props.history.replace(ROUTES.Menu);
    } else {
      alert('認証に失敗しました。。');
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { history, firebase, classes } = this.props;
    return (
      <Container header={false} history={history} firebase={firebase}>
        <ImageContainer>
          <StyledImg src="/images/ippo.png" alt="IPPO" />
        </ImageContainer>
        <SigninForm onSubmit={this.signin} />
        <ButtonContainer>
          <GoogleButton onClick={this.signinWithGoogle} />
        </ButtonContainer>
        <ButtonContainer>
          <Button component={Link} to={ROUTES.Signup} color="primary">
            新規登録
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={this.webauthSignin} color="primary" className={classes.nonCaps}>
            生体認証でログイン(β版)
          </Button>
        </ButtonContainer>
        <OverlaySpinner visible={this.state.loading} />
      </Container>
    );
  }
}

Signin.displayName = 'Signin';

Signin.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    auth: propTypes.shape({
      getRedirectResult: propTypes.func.isRequired,
    }),
    doSignInWithEmailAndPassword: propTypes.func.isRequired,
    doSignInWithGoogle: propTypes.func.isRequired,
    doSignOut: propTypes.func.isRequired,
  }).isRequired,
  rawId: propTypes.object,
  uid: propTypes.string,
};

Signin.defaultProps = {};

export default withStyles(styles)(Signin);
