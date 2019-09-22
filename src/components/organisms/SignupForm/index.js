import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import InputCategoriesAutoSuggest from 'components/organisms/InputCategoriesAutoSuggest';

class SignupForm extends React.Component {
  state = { email: '', pass: '', name: '', categories: [], loading: false, error: '' };

  onClick = async event => {
    event.preventDefault();
    const { email, pass, name, categories } = this.state;
    this.setState({ loading: true });
    try {
      await this.props.onSubmit({ data: { email, pass, name, categories: categories.join(',') } });
    } catch (e) {
      this.setState({ loading: false, error: e.toString() });
    }
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  handleAddChip = chip =>
    this.setState(prevState => ({ categories: [...prevState.categories, chip] }));

  handleDeleteChip = chip =>
    this.setState(prevState => ({ categories: prevState.categories.filter(c => c !== chip) }));

  render() {
    const { email, pass, name, categories, loading, error } = this.state;
    const invalid = email.trim() === '' || pass.trim() === '' || name.trim() === '';
    return (
      <form>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="名前"
          name="name"
          value={name}
          onChange={this.onChange}
          margin="dense"
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
          margin="dense"
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
          margin="dense"
          color="primary"
          fullWidth
          required
        />
        <br />
        <InputCategoriesAutoSuggest
          label="興味のあるカテゴリ"
          value={categories}
          handleAddChip={this.handleAddChip}
          handleDeleteChip={this.handleDeleteChip}
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
