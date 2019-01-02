import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.4);
  position: fixed;
  z-index: 20;
`;

const OverlaySpinner = ({ visible }) =>
  visible ? (
    <Overlay>
      <CircularProgress />
    </Overlay>
  ) : null;

OverlaySpinner.displayName = 'OverlaySpinner';

OverlaySpinner.propTypes = {
  visible: propTypes.bool.isRequired,
};

OverlaySpinner.defaultProps = {};

export default OverlaySpinner;
