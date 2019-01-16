import React from 'react';
import { Button, List, ListItem, ListItemIcon, TextField, Typography } from '@material-ui/core';
// ユーザアイコンの上にこのアイコンを重ねたい
// import { PhotoCameraOutlined } from '@material-ui/icons';
import propTypes from 'prop-types';
import CharIcon from 'src/components/atoms/CharIcon';
import OverlaySpinner from 'src/components/molecules/OverlaySpinner';
import InputCategoriesAutoSuggest from 'src/components/organisms/InputCategoriesAutoSuggest';
import Container from 'src/components/templates/Container';

class SettingsAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      categories: [],
      error: '',
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      data: { fetchUser },
    } = this.props;
    if (prevProps.data.loading && fetchUser) {
      const { displayName, categories } = fetchUser;
      this.setState({
        name: displayName,
        categories: categories ? categories.split(',') : [],
      });
    }
  }

  onClick = async event => {
    event.preventDefault();
    const { name, categories } = this.state;
    const { updateUser } = this.props;
    this.setState({ loading: true });
    try {
      await updateUser({ variables: { name, categories: categories.join(',') } });
      this.setState({ loading: false });
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
    const {
      data: { loading },
      authUser,
      history,
      firebase,
    } = this.props;
    const { name, categories, error } = this.state;
    const invalid = name.trim() === '';
    return (
      <Container
        title="アカウント設定"
        back
        authUser={authUser}
        history={history}
        firebase={firebase}
      >
        <OverlaySpinner visible={loading} />
        <List>
          <ListItem>
            <ListItemIcon>
              <CharIcon name={authUser.displayName} />
            </ListItemIcon>
          </ListItem>
        </List>
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
          <InputCategoriesAutoSuggest
            label="興味のあるカテゴリ"
            value={categories}
            handleAddChip={this.handleAddChip}
            handleDeleteChip={this.handleDeleteChip}
          />
          <br />
          <Button
            onClick={this.onClick}
            disabled={invalid}
            color="primary"
            variant="contained"
            fullWidth
          >
            更新する
          </Button>
        </form>
      </Container>
    );
  }
}

SettingsAccount.displayName = 'SettingsAccount';

SettingsAccount.propTypes = {
  data: propTypes.shape({
    fetchUser: propTypes.shape({
      displayName: propTypes.string.isRequired,
      categories: propTypes.string,
    }),
    loading: propTypes.bool.isRequired,
  }).isRequired,
  updateUser: propTypes.func.isRequired,
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

SettingsAccount.defaultProps = {};

export default SettingsAccount;
