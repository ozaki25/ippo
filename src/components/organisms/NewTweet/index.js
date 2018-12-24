import React from 'react';
import { Classes, Dialog } from '@blueprintjs/core';
import propTypes from 'prop-types';
import TweetForm from 'src/components/organisms/TweetForm';

const styles = {
  dialog: {
    margin: '0 15px',
  },
};

const NewTweet = ({ createTweet, isOpen, onClose, hashtag, refetch, authUser }) => {
  const onFinished = () => {
    refetch();
    onClose();
  };
  return (
    <Dialog
      title="ツイート"
      isOpen={isOpen}
      onClose={onClose}
      style={styles.dialog}
      isCloseButtonShown
    >
      <div className={Classes.DIALOG_BODY}>
        <TweetForm
          createTweet={createTweet}
          hashtag={hashtag}
          onFinished={onFinished}
          authUser={authUser}
        />
      </div>
    </Dialog>
  );
};

NewTweet.displayName = 'NewTweet';

NewTweet.propTypes = {
  createTweet: propTypes.func.isRequired,
  isOpen: propTypes.bool,
  onClose: propTypes.func,
  hashtag: propTypes.string.isRequired,
  refetch: propTypes.func.isRequired,
  authUser: propTypes.shape({
    uid: propTypes.string.isRequired,
    displayName: propTypes.string.isRequired,
  }).isRequired,
};

NewTweet.defaultProps = {
  isOpen: false,
  onClose: null,
};

export default NewTweet;
