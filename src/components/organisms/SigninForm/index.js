import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import propTypes from 'prop-types';

class SigninForm extends React.Component {
  state = { email: '', pass: '', loading: false, error: '' };

  onClick = async event => {
    event.preventDefault();
    const { email, pass } = this.state;
    this.setState({ loading: true });
    try {
      await this.props.onSubmit({ data: { email, pass } });
    } catch (e) {
      this.setState({ loading: false, error: e.toString() });
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, pass, loading, error } = this.state;
    const invalid = email.trim() === '' || pass.trim() === '';
    return (
      <form>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="メールアドレス"
          name="email"
          value={email}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
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
        />
        <br />
        <Button
          onClick={this.onClick}
          disabled={invalid || loading}
          color="primary"
          variant="contained"
          fullWidth
        >
          ログイン
        </Button>
      </form>
    );
  }
}

SigninForm.displayName = 'SigninForm';

SigninForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SigninForm;
