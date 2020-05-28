import React from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Typography,
} from '@material-ui/core';
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
    const {
      data: { fetchUser },
    } = props;
    this.state = {
      name: fetchUser ? fetchUser.displayName : '',
      categories:
        fetchUser && fetchUser.categories
          ? fetchUser.categories.split(',')
          : [],
      error: '',
    };
  }

  componentDidMount() {
    const {
      data: { refetch, fetchUser },
      authUser: { uid },
    } = this.props;
    if (!fetchUser) refetch({ variables: { uid } });
  }

  componentDidUpdate(prevProps, prevState) {
    const { loading, fetchUser } = this.props.data;
    if (prevProps.data.loading && !loading) {
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
    const {
      updateUser,
      authUser: { uid },
      data,
    } = this.props;
    this.setState({ loading: true });
    try {
      const user = { uid, displayName: name, categories: categories.join(',') };
      await updateUser({ variables: { user } });
      localStorage.setItem('authUser', JSON.stringify(user));
      this.props.setAuthUser(user);
      this.setState({ loading: false });
      alert('更新しました');
      data.refetch({ variables: { uid } });
    } catch (e) {
      this.setState({ loading: false, error: e.toString() });
    }
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleAddChip = chip =>
    this.setState(prevState => ({
      categories: [...prevState.categories, chip],
    }));

  handleDeleteChip = chip =>
    this.setState(prevState => ({
      categories: prevState.categories.filter(c => c !== chip),
    }));

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
        {error && <Typography color="error">{error}</Typography>}
        <List>
          <ListItem>
            <ListItemIcon>
              <CharIcon name={authUser.displayName} />
            </ListItemIcon>
          </ListItem>
        </List>
        <form>
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
      displayName: propTypes.string,
      categories: propTypes.string,
    }),
    loading: propTypes.bool.isRequired,
    refetch: propTypes.func.isRequired,
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
  setAuthUser: propTypes.func.isRequired,
};

SettingsAccount.defaultProps = {};

export default SettingsAccount;
