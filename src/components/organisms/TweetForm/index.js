import React from 'react';
import styled from 'styled-components';
import { Text } from '@blueprintjs/core';
import propTypes from 'prop-types';
import { Button, FormGroup, TextArea } from '@blueprintjs/core';

const Error = styled(Text)`
  color: red;
`;

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `
#${this.props.hashtag}`,
      error: false,
    };
    this.text = React.createRef();
    console.log(props);
  }

  componentDidMount() {
    this.text.current.focus();
    this.text.current.setSelectionRange(0, 0);
  }

  onClick = async () => {
    if (!this.invalid()) {
      const { text } = this.state;
      const { hashtag, createTweet, onFinished } = this.props;
      const tweet = {
        text,
        hashtag,
        name: 'ozaki25', // TODO
        time: new Date().toString(),
      };
      const result = await createTweet({
        variables: { tweet },
      }).catch(e => console.log(e));
      console.log(result);
      onFinished();
    } else {
      this.setState({ error: true });
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  invalid = () => this.state.text.trim() === '';

  render() {
    return (
      <form>
        {this.state.error && <Error>入力内容を確認して下さい</Error>}
        <FormGroup labelFor="text">
          <TextArea
            id="text"
            name="text"
            onChange={this.onChange}
            value={this.state.text}
            inputRef={this.text}
            large
            fill
          />
        </FormGroup>
        <Button onClick={this.onClick} disabled={this.invalid()} text="ツイート" fill large />
      </form>
    );
  }
}

TweetForm.displayName = 'TweetForm';

TweetForm.propTypes = {
  createTweet: propTypes.func.isRequired,
  hashtag: propTypes.string.isRequired,
  onFinished: propTypes.func.isRequired,
};

TweetForm.defaultProps = {};

export default TweetForm;
