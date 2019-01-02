import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import GoogleButton from 'src/components/atoms/GoogleButton';
import OverlaySpinner from 'src/components/molecules/OverlaySpinner';
import SigninForm from 'src/components/organisms/SigninForm';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';

const ButtonContainer = styled.div`
  margin: 5px 0;
  text-align: center;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 80px 0 30px;
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

  signin = async ({ data: { email, pass } }) => {
    await this.props.firebase.doSignInWithEmailAndPassword(email, pass);
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
    const { history, firebase } = this.props;
    return (
      <Container title="ログイン" header={false} history={history} firebase={firebase}>
        <ImageContainer>
          <StyledImg src="/images/ippo.png" alt="IPPO" />
        </ImageContainer>
        <SigninForm onSubmit={this.signin} />
        <ButtonContainer>
          <GoogleButton onClick={this.signinWithGoogle} />
        </ButtonContainer>
        <ButtonContainer>
          <Button component={Link} to={ROUTES.Signup} color="primary" fullWidth>
            新規登録
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
  }).isRequired,
  firebase: propTypes.shape({
    doSignInWithEmailAndPassword: propTypes.func.isRequired,
  }).isRequired,
};

Signin.defaultProps = {};

export default Signin;
