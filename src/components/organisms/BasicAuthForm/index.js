import React from 'react';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

class BasicAuthForm extends React.Component {
  state = { email: '', pass: '' };

  onClick = event => {
    event.preventDefault();
    const { email, pass } = this.state;
    this.props.onSubmit({ data: { email, pass } });
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, pass } = this.state;
    const { buttonText } = this.props;
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
          text={buttonText}
          type="submit"
          disabled={invalid}
          fill
          large
        />
      </form>
    );
  }
}

BasicAuthForm.displayName = 'BasicAuthForm';

BasicAuthForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  buttonText: propTypes.string.isRequired,
};

export default BasicAuthForm;
