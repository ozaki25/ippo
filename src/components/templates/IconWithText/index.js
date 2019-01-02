import React from 'react';
import styled from 'styled-components';

const StyledIconWithText = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
`;
const IconWithText = props => <StyledIconWithText {...props} />;

IconWithText.displayName = 'IconWithText';

export default IconWithText;
