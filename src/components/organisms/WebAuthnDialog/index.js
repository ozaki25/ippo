import React from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import propTypes from 'prop-types';
import { setRawId } from 'src/modules/webauth';
import webAuthentication from 'src/utils/webAuthentication';

class WebAuthnDialog extends React.Component {
  onClick = async () => {
    const { onSetRawId, uid } = this.props;
    const rawId = await webAuthentication.runAttestation();
    if (rawId) {
      onSetRawId({ rawId, uid });
      alert('登録が完了しました！');
      this.props.onClose();
    } else {
      alert('登録に失敗しました');
    }
  };

  render() {
    const { open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="simple-dialog-title">生体認証(β版)</DialogTitle>
        <DialogContent>
          <Button onClick={this.onClick} variant="contained">
            認証情報を登録する
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
}

WebAuthnDialog.displayName = 'WebAuthnDialog';

WebAuthnDialog.propTypes = {
  uid: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  onSetRawId: propTypes.func.isRequired,
};

WebAuthnDialog.defaultProps = {};

const mapDispatchToProps = dispatch => ({
  onSetRawId: ({ rawId, uid }) => dispatch(setRawId({ rawId, uid })),
});

export default connect(
  null,
  mapDispatchToProps,
)(WebAuthnDialog);
