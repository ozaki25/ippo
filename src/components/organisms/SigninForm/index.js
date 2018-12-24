import React from 'react';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

class SigninForm extends React.Component {
  state = { email: '', pass: '' };

  onClick = event => {
    event.preventDefault();
    const { email, pass } = this.state;
    this.props.onSubmit({ data: { email, pass } });
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, pass } = this.state;
    const invalid = email.trim() === '' || pass.trim() === '';
    return (
      <form>
        <FormGroup label="メールアドレス" labelFor="email">
          <InputGroup
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            large
          />
        </FormGroup>
        <FormGroup label="パスワード" labelFor="pass">
          <InputGroup
            id="pass"
            name="pass"
            type="password"
            value={this.state.pass}
            onChange={this.onChange}
            large
          />
        </FormGroup>
        <Button
          onClick={this.onClick}
          text="ログイン"
          type="submit"
          disabled={invalid}
          fill
          large
        />
      </form>
    );
  }
}

SigninForm.displayName = 'SigninForm';

SigninForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SigninForm;
