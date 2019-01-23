import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledImage = styled.img`
  max-width: 100%;
`;

const IosA2HS = () => (
  <>
    <Typography>1.以下のアイコンを選択</Typography>
    <StyledImage src="/images/a2hs/ios1.png" alt="ios1" />
    <Typography>2.「ホーム画面に追加」を選択</Typography>
    <StyledImage src="/images/a2hs/ios2.png" alt="ios2" />
    <Typography>3.「追加」を選択</Typography>
    <StyledImage src="/images/a2hs/ios3.png" alt="ios3" />
    <Typography>4.ホーム画面にアプリがインスールされる</Typography>
    <StyledImage src="/images/a2hs/ios4.png" alt="ios4" />
  </>
);

const AndroidA2HS = () => (
  <>
    <Typography>1.以下のボタンから設定を開く</Typography>
    <StyledImage src="/images/a2hs/android1.jpeg" alt="ios1" />
    <Typography>2.「ホーム画面に追加」を選択</Typography>
    <StyledImage src="/images/a2hs/android2.jpeg" alt="android2" />
    <Typography>3.「追加」を選択</Typography>
    <StyledImage src="/images/a2hs/android3.jpeg" alt="android3" />
    <Typography>4.ホーム画面にアプリがインスールされる</Typography>
    <StyledImage src="/images/a2hs/android4.jpeg" alt="android4" />
  </>
);

const styles = {
  nonCaps: {
    textTransform: 'none',
  },
};

class A2HSDialog extends React.Component {
  state = { content: '' };

  render() {
    const { open, onClose, classes } = this.props;
    const { content } = this.state;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="simple-dialog-title">ホーム画面への追加手順</DialogTitle>
        <DialogContent>
          <>
            <Button
              color="primary"
              className={classes.nonCaps}
              onClick={() => this.setState({ content: '1' })}
            >
              iOS/Safariをお使いの方
            </Button>
            {content === '1' && <IosA2HS />}
            <Button
              color="primary"
              className={classes.nonCaps}
              onClick={() => this.setState({ content: '2' })}
            >
              Android/Chromeをお使いの方
            </Button>
            {content === '2' && <AndroidA2HS />}
          </>
        </DialogContent>
      </Dialog>
    );
  }
}

A2HSDialog.displayName = 'A2HSDialog';

A2HSDialog.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
};

A2HSDialog.defaultProps = {};

export default withStyles(styles)(A2HSDialog);
