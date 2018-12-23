import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import NavigationBar from 'src/hoc/WithNavigationBar';

const StyledContainer = styled.div`
  padding: ${({ noPadding }) => (noPadding ? 'inherit' : '10px 15px')};
`;

const Container = ({ children, authUser, noPadding }) => (
  <>
    <NavigationBar authUser={authUser} />
    <StyledContainer noPadding={noPadding}>{children}</StyledContainer>
  </>
);

Container.displayName = 'Container';

Container.propTypes = {
  authUser: propTypes.object,
  noPadding: propTypes.bool,
};

Container.defaultProps = {
  authUser: null,
  noPadding: false,
};

export default Container;
