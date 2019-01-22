import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import propTypes from 'prop-types';

function str2buf(str) {
  return Uint8Array.from(window.atob(str), c => c.charCodeAt(0));
}

function buf2str(buf) {
  let str = '';
  if (!(buf.constructor === Uint8Array)) {
    buf = new Uint8Array(buf);
  }
  buf.map(function(x) {
    return (str += String.fromCharCode(x));
  });
  return str;
}

class WebAuthnDialog extends React.Component {
  runAttestation = async () => {
    // チャレンジ値の生成
    let challengeBuf = new Uint8Array(32);
    window.crypto.getRandomValues(challengeBuf);

    // 公開鍵生成リクエストのパラメータ
    const publicKey = {
      challenge: challengeBuf,
      rp: { name: 'FIDO Example Corporation' },
      user: {
        id: str2buf('MIIBkzCCATigAwIBAjCCAZMwggE4oAMCAQIwggGTMII='),
        name: 'test@example.com',
        displayName: 'Alice von Wunderland',
      },
      attestation: 'direct',
      pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
    };
    console.log(publicKey);
    console.log(JSON.stringify(publicKey));
    // 公開鍵生成リクエスト
    try {
      const attestation = await navigator.credentials.create({ publicKey });
      console.dir(attestation);
      console.dir(JSON.parse(buf2str(attestation.response.clientDataJSON)));
      // rawId = attestation.rawId;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="simple-dialog-title">生体認証</DialogTitle>
        <DialogContent>
          <Button onClick={this.runAttestation} variant="contained">
            生体認証情報を登録する
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
}

WebAuthnDialog.displayName = 'WebAuthnDialog';

WebAuthnDialog.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
};

WebAuthnDialog.defaultProps = {};

export default WebAuthnDialog;
