import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import NavigationBar from 'src/hoc/WithNavigationBar';

const StyledContainer = styled.div`
  padding: 10px 15px;
`;

const Container = ({ children, authUser }) => (
  <>
    <NavigationBar authUser={authUser} />
    <StyledContainer>{children}</StyledContainer>
  </>
);

Container.displayName = 'Container';

Container.propTypes = {
  authUser: propTypes.object,
};

Container.defaultProps = {
  authUser: null,
};

export default Container;
