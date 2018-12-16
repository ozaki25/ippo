import React from 'react';
import { Button } from '@blueprintjs/core';
import styled from 'styled-components';

const StyledRoundButton = styled(Button)`
  border-radius: 50%;
  height: ${({ xlarge }) => (xlarge ? '50px' : 'inherit')};
  width: ${({ xlarge }) => (xlarge ? '50px' : 'inherit')};
`;

const RoundButton = ({ xlarge, ...props }) => (
  <StyledRoundButton xlarge={xlarge ? 1 : 0} {...props} />
);

RoundButton.displayName = 'RoundButton';

export default RoundButton;
