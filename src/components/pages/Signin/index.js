import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import FirebaseAuthButton from 'src/components/atoms/FirebaseAuthButton/index';
import OverlaySpinner from 'src/components/molecules/OverlaySpinner/index';
import InputPassDialog from 'src/components/organisms/InputPassDialog';
import Container from 'src/components/templates/Container';

const ImageContainer = styled.div`
  text-align: center;
  margin: 60px 0 30px;
`;

const StyledImg = styled.img`
  max-width: 60%;
`;

const PASSCODE = process.env.REACT_APP_PASSCODE;

function Signin({ history, firebase }) {
  const [passed, setPassed] = useState(false);
  const [loading, setLoading] = useState(true);

  const onSubmitPasscode = passcode => {
    if (passcode === PASSCODE) {
      localStorage.setItem('ippo-passed', 'true');
      setPassed(true);
    }
  };

  const onLoad = () => setLoading(false);

  useEffect(() => {
    firebase.doSignOut();
    if (localStorage.getItem('ippo-passed')) setPassed(true);
  }, [firebase]);

  if (!passed) {
    return <InputPassDialog open={!passed} onClick={onSubmitPasscode} />;
  }

  return (
    <Container header={false} history={history} firebase={firebase}>
      <ImageContainer>
        <StyledImg src="/images/ippo.png" alt="IPPO" />
      </ImageContainer>
      <FirebaseAuthButton firebase={firebase} uiShown={onLoad} />
      <OverlaySpinner visible={loading} />
    </Container>
  );
}

Signin.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    auth: propTypes.func.isRequired,
    doSignOut: propTypes.func.isRequired,
  }).isRequired,
};

Signin.defaultProps = {};

export default Signin;
