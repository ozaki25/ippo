import React from 'react';
import propTypes from 'prop-types';
import { Classes, Dialog } from '@blueprintjs/core';
import SignupForm from 'src/components/organisms/SignupForm';

const styles = {
  dialog: {
    margin: '0 15px',
  },
};

const SignupFormDialog = ({ isOpen, onSubmit, onClose }) => (
  <Dialog
    title="ユーザ登録"
    isOpen={isOpen}
    onClose={onClose}
    style={styles.dialog}
    isCloseButtonShown
  >
    <div className={Classes.DIALOG_BODY}>
      <SignupForm onSubmit={onSubmit} />
    </div>
  </Dialog>
);

SignupFormDialog.displayName = 'SignupFormDialog';

SignupFormDialog.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onSubmit: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
};

export default SignupFormDialog;
