import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import propTypes from 'prop-types';

class EventCreateForm extends React.Component {
  state = {
    title: '',
    catchMessage: '',
    place: '',
    hashtag: '',
    startedAt: '',
    endedAt: '',
    loading: false,
    error: false,
  };

  onClick = async event => {
    event.preventDefault();
    const { title, catchMessage, place, hashtag, startedAt, endedAt } = this.state;
    this.setState({ loading: true });
    try {
      const { data } = await this.props.onSubmit({
        title,
        catchMessage,
        place,
        hashtag,
        startedAt,
        endedAt,
      });
      console.log({ data });
    } catch (e) {
      this.setState({ loading: false, error: e.toString() });
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { title, catchMessage, place, hashtag, startedAt, endedAt, loading, error } = this.state;
    const invalid = this.state.title.trim() === '' || this.state.hashtag.trim() === '';
    return (
      <form>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="イベント名"
          name="title"
          value={title}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
          required
        />
        <br />
        <TextField
          label="概要"
          name="catchMessage"
          value={catchMessage}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
        />
        <br />
        <TextField
          label="場所"
          name="place"
          value={place}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
        />
        <br />
        <TextField
          label="ハッシュタグ"
          name="hashtag"
          value={hashtag}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
          required
        />
        <br />
        <TextField
          label="開始日時"
          name="startedAt"
          type="datetime-local"
          value={startedAt}
          onChange={this.onChange}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          color="primary"
          fullWidth
        />
        <br />
        <TextField
          label="終了日時"
          name="endedAt"
          type="datetime-local"
          value={endedAt}
          onChange={this.onChange}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          color="primary"
          fullWidth
        />
        <Button
          onClick={this.onClick}
          disabled={invalid || loading}
          color="primary"
          variant="contained"
          fullWidth
        >
          作成
        </Button>
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
