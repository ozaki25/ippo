import React from 'react';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';
import ROUTES from 'src/router';
import Container from 'src/components/templates/Container';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', pass: '' };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, pass } = this.state;
    console.log({ email, pass });
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, pass)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          email,
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ email: '', pass: '' });
        this.props.history.push(ROUTES.Menu);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
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
          <Button text="登録" type="submit" disabled={invalid} fill large />
        </form>
      </Container>
    );
  }
}

Signup.displayName = 'Signup';

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
