import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import RoundedButton from 'src/components/atoms/RoundedButton';
import IconImage from 'src/components/atoms/IconImage';
import PopMessage from 'src/components/atoms/PopMessage';
import Container from 'src/components/templates/Container';
import TWEET_WORD from 'src/constants/tweetWord';
import alertMessage from 'src/constants/alertMessage';

const inputProps = {
  style: {
    paddingTop: '10px',
  },
};

const Wrapper = styled.div`
  margin-left: 58px;
`;

const StyledIconImage = styled(IconImage)`
  margin-left: -58px;
`;

const Buttons = styled.div`
  margin: 8px 0;
  text-align: right;
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
    };
    this.tweet = React.createRef();
  }

  componentDidMount() {
    this.tweet.current.setSelectionRange(0, 0);
    this.state.type && this.setState({ anchorEl: this.tweet.current });
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  onClickUpload = () => console.log('TODO');

  onClickTweet = async () => {
    const { hashtag, createTweet, authUser, history } = this.props;
    const tweet = {
      text: this.state.tweet,
      hashtag,
      name: authUser.displayName,
      uid: authUser.uid,
      time: new Date().toString(),
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

  render() {
    const { authUser, history, firebase } = this.props;
    const { disabled, error, anchorEl, type } = this.state;
    return (
      <Container title="ツイート" back authUser={authUser} history={history} firebase={firebase}>
        <Wrapper>
          <StyledIconImage src="/icon.png" />
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
            <RoundedButton color="primary" variant="outlined" onClick={this.onClickUpload}>
              アップロード
            </RoundedButton>{' '}
            <RoundedButton color="primary" disabled={disabled} onClick={this.onClickTweet}>
              ツイート
            </RoundedButton>
          </Buttons>
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
