import React from 'react';
import propTypes from 'prop-types';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';
import ROUTES from 'src/constants/routes';
import Container from 'src/components/templates/Container';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', pass: '' };
  }

  onSubmit = async e => {
    e.preventDefault();
    const { email, pass } = this.state;
    try {
      const authUser = await this.props.firebase.doCreateUserWithEmailAndPassword(email, pass);
      console.log(authUser);
      this.setState({ email: '', pass: '' });
      this.props.history.push(ROUTES.Menu);
    } catch (error) {
      console.log(error);
    }
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

Signup.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    doCreateUserWithEmailAndPassword: propTypes.func.isRequired,
  }).isRequired,
};

Signup.defaultProps = {};

export default Signup;