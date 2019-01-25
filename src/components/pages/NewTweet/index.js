import React from 'react';
import { Dialog, DialogTitle, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import RoundedButton from 'src/components/atoms/RoundedButton';
import CharIcon from 'src/components/atoms/CharIcon';
import PopMessage from 'src/components/atoms/PopMessage';
import TweetHeader from 'src/components/organisms/TweetHeader';
import TweetBody from 'src/components/organisms/TweetBody';
import Container from 'src/components/templates/Container';
import TWEET_WORD from 'src/constants/tweetWord';
import alertMessage from 'src/constants/alertMessage';
import dateFormat from 'src/utils/dateFormat';

const inputProps = {
  style: {
    paddingTop: '10px',
  },
};

const Wrapper = styled.div`
  margin-left: 58px;
`;

const ReplyNameContainer = styled.div`
  padding: 8px 0 2px;
`;

const IconContainer = styled.div`
  float: left;
  margin-left: -58px;
  position: absolute;
`;

const Buttons = styled.div`
  margin: 8px 0;
  text-align: right;
`;

const UploaderContainer = styled.div`
  padding: 8px 4px;
`;

const message = type => {
  switch (type) {
    case TWEET_WORD.JOIN_TYPE:
      return alertMessage.tweetGuide.join;
    case TWEET_WORD.LEAVE_TYPE:
      return alertMessage.tweetGuide.leave;
    default:
      return '';
  }
};

class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    const {
      history: {
        location: { search },
      },
    } = props;
    const query = new URLSearchParams(search);
    const defaultTweet = query.get('tweet') || '';
    const type = query.get('type') || '';
    this.state = {
      tweet: `${defaultTweet}
#${this.props.hashtag}`,
      disabled: false,
      error: false,
      anchorEl: null,
      type,
      open: false,
    };
    this.tweet = React.createRef();
    window.addEventListener('uploaded', this.onUploaded);
  }

  componentDidMount() {
    this.tweet.current.setSelectionRange(0, 0);
    this.state.type && this.setState({ anchorEl: this.tweet.current });
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  onClickTweet = async () => {
    const { createTweet, authUser, history, hashtag, parentTweet } = this.props;
    const tweet = {
      text: this.state.tweet,
      name: authUser.displayName,
      uid: authUser.uid,
      time: new Date().toString(),
      parentId: parentTweet.tweet && parentTweet.tweet.id ? parentTweet.tweet.id : null,
      parentHashtag: hashtag,
    };
    this.setState({ disabled: true });
    try {
      const result = await createTweet({
        variables: { tweet },
      });
      console.log(result);
      this.setState({ disabled: false });
      history.goBack();
    } catch (e) {
      this.setState({ error: e.toString(), disabled: false });
      console.log(e);
    }
  };

  handleClose = () => this.setState({ anchorEl: null });

  toggleUploadDialog = () => this.setState(prevState => ({ open: !prevState.open }));

  onUploaded = e => {
    const {
      detail: { url, error },
    } = e;
    if (error) {
      alert('アップロードに失敗しました');
    } else {
      this.setState(prevState => ({
        tweet: `${url}
${prevState.tweet}`,
      }));
      this.toggleUploadDialog();
    }
  };

  render() {
    const {
      authUser,
      history,
      firebase,
      parentTweet: { tweet },
    } = this.props;
    const { disabled, error, anchorEl, type } = this.state;
    return (
      <Container title="ツイート" back authUser={authUser} history={history} firebase={firebase}>
        {tweet && tweet.id && (
          <Wrapper>
            <IconContainer>
              <CharIcon name={tweet.name} />
            </IconContainer>
            <TweetHeader name={tweet.name} time={dateFormat.datetimeJa(tweet.time)} />
            <TweetBody text={tweet.text} />
            <ReplyNameContainer>
              <Typography color="textSecondary">返信先：@{tweet.name}さん</Typography>
            </ReplyNameContainer>
          </Wrapper>
        )}
        <Wrapper>
          <IconContainer>
            <CharIcon name={authUser.displayName} />
          </IconContainer>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            name="tweet"
            rows="4"
            margin="none"
            placeholder="いまどうしてる？"
            InputProps={inputProps}
            inputRef={this.tweet}
            onChange={this.onChange}
            value={this.state.tweet}
            variant="filled"
            multiline
            fullWidth
            autoFocus
          />
          <Buttons>
            <RoundedButton color="primary" variant="outlined" onClick={this.toggleUploadDialog}>
              アップロード
            </RoundedButton>{' '}
            <RoundedButton color="primary" disabled={disabled} onClick={this.onClickTweet}>
              ツイート
            </RoundedButton>
          </Buttons>
          <Dialog open={this.state.open} onClose={this.toggleUploadDialog}>
            <DialogTitle>ファイルアップロード</DialogTitle>
            <UploaderContainer>
              <x-uploader />
            </UploaderContainer>
          </Dialog>
        </Wrapper>
        <PopMessage anchorEl={anchorEl} handleClose={this.handleClose}>
          {message(type)}
        </PopMessage>
      </Container>
    );
  }
}

NewTweet.displayName = 'NewTweet';

NewTweet.propTypes = {
  hashtag: propTypes.string.isRequired,
  parentTweet: propTypes.shape({
    tweet: propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      text: propTypes.string,
      time: propTypes.string,
      hashtag: propTypes.string,
    }),
  }),
  createTweet: propTypes.func.isRequired,
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
    location: propTypes.object.isRequired,
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

NewTweet.defaultProps = {};

export default NewTweet;
