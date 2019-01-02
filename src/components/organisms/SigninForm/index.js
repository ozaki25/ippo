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
      this.setState({ error: e.toString() });
    } finally {
      this.setState({ loading: false });
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
          value={this.state.email}
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
          value={this.state.pass}
          onChange={this.onChange}
          margin="normal"
          color="primary"
          fullWidth
        />
        <br />
        <Button
          onClick={this.onClick}
          type="submit"
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
