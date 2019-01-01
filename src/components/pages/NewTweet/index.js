import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import RoundedButton from 'src/components/atoms/RoundedButton';
import IconImage from 'src/components/atoms/IconImage';
import Container from 'src/components/templates/Container';

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

class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: `
#${this.props.hashtag}`,
      error: false,
    };
    this.tweet = React.createRef();
  }

  componentDidMount() {
    this.tweet.current.setSelectionRange(0, 0);
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
    try {
      const result = await createTweet({
        variables: { tweet },
      });
      console.log(result);
      history.goBack('refetch');
    } catch (e) {
      this.setState({ error: e.toString() });
      console.log(e);
    }
  };

  render() {
    const { authUser, history, firebase } = this.props;
    const { tweet, error } = this.state;
    const disabled = !tweet.trim();
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
            </RoundedButton>
            <RoundedButton color="primary" disabled={disabled} onClick={this.onClickTweet}>
              ツイート
            </RoundedButton>
          </Buttons>
        </Wrapper>
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
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

NewTweet.defaultProps = {};

export default NewTweet;
