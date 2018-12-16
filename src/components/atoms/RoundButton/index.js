import React from 'react';
import propTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import styled from 'styled-components';

const StyledRoundButton = styled(Button)`
  border-radius: 50%;
`;

const RoundButton = props => <StyledRoundButton {...props} />;

RoundButton.displayName = 'RoundButton';

RoundButton.propTypes = {};

export default RoundButton;
