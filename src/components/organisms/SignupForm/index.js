import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import propTypes from 'prop-types';

class SignupForm extends React.Component {
  state = { email: '', pass: '', name: '', loading: false, error: '' };

  onClick = async event => {
    event.preventDefault();
    const { email, pass, name } = this.state;
    this.setState({ loading: true });
    try {
      await this.props.onSubmit({ data: { email, pass, name } });
    } catch (e) {
      this.setState({ loading: false, error: e.toString() });
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, pass, name, loading, error } = this.state;
    const invalid = email.trim() === '' || pass.trim() === '' || name.trim() === '';
    return (
      <form>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="名前"
          name="name"
          value={name}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
          required
        />
        <br />
        <TextField
          label="メールアドレス"
          name="email"
          value={email}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
          required
        />
        <br />
        <TextField
          label="パスワード"
          name="pass"
          type="password"
          value={pass}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
          required
        />
        <br />
        <Button
          onClick={this.onClick}
          disabled={invalid || loading}
          color="primary"
          variant="contained"
          fullWidth
        >
          登録
        </Button>
      </form>
    );
  }
}

SignupForm.displayName = 'SignupForm';

SignupForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SignupForm;
