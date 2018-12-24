import React from 'react';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

class SignupForm extends React.Component {
  state = { email: '', pass: '', name: '' };

  onClick = event => {
    event.preventDefault();
    const { email, pass, name } = this.state;
    this.props.onSubmit({ data: { email, pass, name } });
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, pass, name } = this.state;
    const invalid = email.trim() === '' || pass.trim() === '' || name.trim() === '';
    return (
      <form>
        <FormGroup label="名前" labelFor="name">
          <InputGroup
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            large
          />
        </FormGroup>
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
        <Button onClick={this.onClick} text="登録" type="submit" disabled={invalid} fill large />
      </form>
    );
  }
}

SignupForm.displayName = 'SignupForm';

SignupForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SignupForm;
