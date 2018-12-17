import React from 'react';
import styled from 'styled-components';
import NavigationBar from 'src/components/molecules/NavigationBar';

const StyledContainer = styled.div`
  padding: 10px 15px;
`;

const Container = ({ children }) => (
  <>
    <NavigationBar appName="IPPO" />
    <StyledContainer>{children}</StyledContainer>
  </>
);

export default Container;
