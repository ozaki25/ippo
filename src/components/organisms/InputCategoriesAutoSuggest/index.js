import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import ChipInput from 'material-ui-chip-input';
import { MenuItem, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import CATEGORIES from 'src/constants/categories';

const renderInput = ({ onChange, onAdd, onDelete, onFocus, onBlur, onKeyDown, chips, ref }) => (
  <ChipInput
    label="カテゴリ"
    color="primary"
    onUpdateInput={onChange}
    onAdd={onAdd}
    onDelete={onDelete}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
    value={chips}
    inputRef={ref}
    fullWidth
    clearInputValueOnChange
  />
);

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);
  return (
    <MenuItem selected={isHighlighted} component="div" onMouseDown={e => e.preventDefault()}>
      {parts.map((part, index) =>
        part.highlight ? (
          <span key={index} style={{ fontWeight: 300 }}>
            {part.text}
          </span>
        ) : (
          <strong key={index} style={{ fontWeight: 500 }}>
            {part.text}
          </strong>
        ),
      )}
    </MenuItem>
  );
};

const renderSuggestionsContainer = ({ containerProps, children }) => (
  <Paper {...containerProps} square>
    {children}
  </Paper>
);

const getSuggestionValue = suggestion => suggestion;

const getSuggestions = ({ value, selected }) => {
  console.log({ value, selected });
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  return inputLength === 0
    ? []
    : CATEGORIES.filter(suggestion => {
        const keep =
          count < 5 &&
          !selected.includes(suggestion) &&
          suggestion.toLowerCase().slice(0, inputLength) === inputValue;
        if (keep) count += 1;
        return keep;
      });
};

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 200,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});

class InputCategoriesAutoSuggest extends React.Component {
  state = {
    suggestions: [],
    value: [],
    textFieldInput: '',
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    const suggestions = getSuggestions({ value, selected: this.state.value });
    this.setState({ suggestions });
  };

  handleSuggestionsClearRequested = () => this.setState({ suggestions: [] });

  handletextFieldInputChange = (event, { newValue }) => this.setState({ textFieldInput: newValue });

  handleAddChip = chip =>
    this.setState(prevState => ({ value: [...prevState.value, chip], textFieldInput: '' }));

  handleDeleteChip = (chip, index) =>
    this.setState(prevState => ({ value: prevState.value.slice(index, 1) }));

  render() {
    const { classes } = this.props;
    const { suggestions, value, textFieldInput } = this.state;
    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={(e, { suggestionValue }) => {
          this.handleAddChip(suggestionValue);
          e.preventDefault();
        }}
        inputProps={{
          classes,
          chips: value,
          onChange: this.handletextFieldInputChange,
          value: textFieldInput,
          onAdd: this.handleAddChip,
          onDelete: this.handleDeleteChip,
        }}
      />
    );
  }
}
InputCategoriesAutoSuggest.displayName = 'InputCategoriesAutoSuggest';

InputCategoriesAutoSuggest.propTypes = {};

InputCategoriesAutoSuggest.defaultProps = {};

export default withStyles(styles)(InputCategoriesAutoSuggest);
