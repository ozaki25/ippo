import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import NavigationBar from 'src/components/organisms/NavigationBar';

const StyledContainer = styled.div`
  padding: ${({ noPadding }) => (noPadding ? 'inherit' : '5px 10px')};
`;

const Container = ({ children, title, authUser, noPadding, header, back, history, firebase }) => (
  <>
    {header && (
      <NavigationBar
        title={title}
        authUser={authUser}
        back={back}
        history={history}
        firebase={firebase}
      />
    )}
    <StyledContainer noPadding={noPadding}>{children}</StyledContainer>
  </>
);

Container.displayName = 'Container';

Container.propTypes = {
  title: propTypes.string,
  authUser: propTypes.object,
  noPadding: propTypes.bool,
  header: propTypes.bool,
  back: propTypes.bool,
  history: propTypes.object.isRequired,
  firebase: propTypes.object.isRequired,
};

Container.defaultProps = {
  title: '',
  authUser: null,
  noPadding: false,
  header: true,
  back: false,
};

export default Container;
