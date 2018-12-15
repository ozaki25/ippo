import React from 'react';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

// TODO
const validate = () => true;

class EventCreateForm extends React.Component {
  state = { title: '', catchMessage: '', place: '', startedAt: '', endedAt: '', invalid: false };

  onClick = () => {
    const { title, catchMessage, place, startedAt, endedAt } = this.state;
    const { onSubmit } = this.props;
    if (validate()) {
      onSubmit({ title, catchMessage, place, startedAt, endedAt });
    } else {
      this.setState({ invalid: true });
    }
  };

  render() {
    return (
      <form>
        <FormGroup label="イベント名" labelFor="title" labelInfo="(必須)">
          <InputGroup
            id="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
            large
          />
          <p>{this.state.title}</p>
        </FormGroup>
        <FormGroup label="概要" labelFor="catchMessage">
          <InputGroup
            id="catchMessage"
            value={this.state.catchMessage}
            onChange={e => this.setState({ catchMessage: e.target.value })}
            large
          />
        </FormGroup>
        <FormGroup label="場所" labelFor="place">
          <InputGroup
            id="place"
            value={this.state.place}
            onChange={e => this.setState({ place: e.target.value })}
            large
          />
        </FormGroup>
        <FormGroup label="開始日時" labelFor="startedAt">
          <InputGroup
            id="startedAt"
            value={this.state.startedAt}
            onChange={e => this.setState({ startedAt: e.target.value })}
            placeholder="2018/1/23 9:30"
            large
          />
        </FormGroup>
        <FormGroup label="終了日時" labelFor="endedAt">
          <InputGroup
            id="endedAt"
            value={this.state.endedAt}
            onChange={e => this.setState({ endedAt: e.target.value })}
            placeholder="2018/1/23 9:30"
            large
          />
        </FormGroup>
        <Button onClick={this.onClick} text="作成" fill large />
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
