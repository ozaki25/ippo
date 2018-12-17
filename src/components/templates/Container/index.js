import React from 'react';
import styled from 'styled-components';
import NavigationBar from 'src/hoc/WithNavigationBar';

const StyledContainer = styled.div`
  padding: 10px 15px;
`;

const Container = ({ children }) => (
  <>
    <NavigationBar />
    <StyledContainer>{children}</StyledContainer>
  </>
);

Container.displayName = 'Container';

export default Container;
