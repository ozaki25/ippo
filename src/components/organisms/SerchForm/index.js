import React from 'react';
import propTypes from 'prop-types';
import { Button, InputGroup } from '@blueprintjs/core';

class SearchForm extends React.Component {
  state = { searchWord: '' };

  onChangeSearchWord = event => this.setState({ searchWord: event.target.value });

  onSubmit = () => {
    this.props.search(this.state.searchWord);
  };

  render() {
    const { searchWord } = this.state;
    return (
      <InputGroup
        onChange={this.onChangeSearchWord}
        value={searchWord}
        leftIcon="search"
        rightElement={<Button onClick={this.onSubmit} icon="arrow-right" minimal />}
        large
      />
    );
  }
}

SearchForm.displayName = 'SearchForm';

SearchForm.propTypes = {
  search: propTypes.func.isRequired,
};

export default SearchForm;
