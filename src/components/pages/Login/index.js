import React from 'react';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';
import Container from 'src/components/templates/Container';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', pass: '' };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, pass } = this.state;
    console.log({ email, pass });
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, pass } = this.state;
    const invalid = email.trim() === '' || pass.trim() === '';
    return (
      <Container>
        <form onSubmit={this.onSubmit}>
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
          <Button text="ログイン" type="submit" disabled={invalid} fill large />
        </form>
      </Container>
    );
  }
}

Login.displayName = 'Login';

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
