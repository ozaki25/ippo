import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Overlay, Spinner } from '@blueprintjs/core';

const CentringSpinner = styled(Spinner)`
  width: 100%;
  height: 100%;
`;
const OverlaySpinner = ({ loading }) => (
  <Overlay isOpen={loading}>
    <CentringSpinner />
  </Overlay>
);

OverlaySpinner.displayName = 'OverlaySpinner';

OverlaySpinner.propTypes = {
  loading: propTypes.bool,
};

OverlaySpinner.defaultProps = {};

export default OverlaySpinner;
