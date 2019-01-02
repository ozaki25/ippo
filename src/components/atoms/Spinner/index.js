import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const Centering = styled.div`
  text-align: center;
`;

const Spinner = props => (
  <Centering>
    <CircularProgress {...props} />
  </Centering>
);

Spinner.displayName = 'Spinner';

export default Spinner;
