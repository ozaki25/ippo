import React from 'react';
import styled from 'styled-components';
import { Text } from '@blueprintjs/core';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

const Error = styled(Text)`
  color: red;
`;

class EventCreateForm extends React.Component {
  state = {
    title: '',
    catchMessage: '',
    place: '',
    hashtag: '',
    startedAt: '',
    endedAt: '',
    error: false,
  };

  onClick = async () => {
    const { title, catchMessage, place, hashtag, startedAt, endedAt } = this.state;
    const { onSubmit } = this.props;
    if (!this.invalid()) {
      const { data } = await onSubmit({ title, catchMessage, place, hashtag, startedAt, endedAt });
      console.log(data);
    } else {
      this.setState({ error: true });
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  invalid = () => this.state.title.trim() === '' || this.state.hashtag.trim() === '';

  render() {
    return (
      <form>
        {this.state.error && <Error>入力内容を確認して下さい</Error>}
        <FormGroup label="イベント名" labelFor="title" labelInfo="(必須)">
          <InputGroup
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            large
          />
        </FormGroup>
        <FormGroup label="概要" labelFor="catchMessage">
          <InputGroup
            id="catchMessage"
            name="catchMessage"
            value={this.state.catchMessage}
            onChange={this.onChange}
            large
          />
        </FormGroup>
        <FormGroup label="場所" labelFor="place">
          <InputGroup
            id="place"
            name="place"
            value={this.state.place}
            onChange={this.onChange}
            large
          />
        </FormGroup>
        <FormGroup label="ハッシュタグ" labelFor="hashtag" labelInfo="(必須)">
          <InputGroup
            id="hashtag"
            name="hashtag"
            value={this.state.hashtag}
            onChange={this.onChange}
            large
          />
        </FormGroup>
        <FormGroup label="開始日時" labelFor="startedAt">
          <InputGroup
            id="startedAt"
            name="startedAt"
            value={this.state.startedAt}
            onChange={this.onChange}
            placeholder="2018/1/23 9:30"
            large
          />
        </FormGroup>
        <FormGroup label="終了日時" labelFor="endedAt">
          <InputGroup
            id="endedAt"
            name="endedAt"
            value={this.state.endedAt}
            onChange={this.onChange}
            placeholder="2018/1/23 9:30"
            large
          />
        </FormGroup>
        <Button onClick={this.onClick} disabled={this.invalid()} text="作成" fill large />
      </form>
    );
  }
}

EventCreateForm.displayName = 'EventCreateForm';

EventCreateForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

EventCreateForm.defaultProps = {};

export default EventCreateForm;
