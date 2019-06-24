import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from '@material-ui/core';
import propTypes from 'prop-types';

class InputPassDialog extends React.Component {
  inputRef = React.createRef();

  onClick = () => {
    const { onClick } = this.props;
    onClick(this.inputRef.current.value);
  };

  render() {
    const { open } = this.props;
    return (
      <Dialog open={open}>
        <DialogContent>
          <DialogContentText>パスコードを入力してください</DialogContentText>
          <TextField autoFocus type="password" fullWidth inputRef={this.inputRef} />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onClick} color="primary" fullWidth>
            送信
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

InputPassDialog.displayName = 'InputPassDialog';

InputPassDialog.propTypes = {
  open: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

InputPassDialog.defaultProps = {};

export default InputPassDialog;
