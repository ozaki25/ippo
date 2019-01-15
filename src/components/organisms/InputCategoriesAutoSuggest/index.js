import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import ChipInput from 'material-ui-chip-input';
import { MenuItem, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import CATEGORIES from 'src/constants/categories';

function renderInput(inputProps) {
  const { classes, autoFocus, value, onChange, onAdd, onDelete, chips, ref, ...other } = inputProps;

  return (
    <ChipInput
      clearInputValueOnChange
      onUpdateInput={onChange}
      onAdd={onAdd}
      onDelete={onDelete}
      value={chips}
      inputRef={ref}
      label="カテゴリ"
      color="primary"
      fullWidth
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);

  return (
    <MenuItem
      selected={isHighlighted}
      component="div"
      onMouseDown={e => e.preventDefault()} // prevent the click causing the input to be blurred
    >
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={index} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={index} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer({ containerProps, children }) {
  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  return inputLength === 0
    ? []
    : CATEGORIES.filter(suggestion => {
        const keep = count < 5 && suggestion.toLowerCase().slice(0, inputLength) === inputValue;
        if (keep) count += 1;
        return keep;
      });
}

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

  handleSuggestionsFetchRequested = ({ value }) =>
    this.setState({ suggestions: getSuggestions(value) });

  handleSuggestionsClearRequested = () => this.setState({ suggestions: [] });

  handletextFieldInputChange = (event, { newValue }) => this.setState({ textFieldInput: newValue });

  handleAddChip = chip => this.setState({ value: [...this.state.value, chip], textFieldInput: '' });

  handleDeleteChip = (chip, index) =>
    this.setState(prevState => ({ value: prevState.value.slice(index, 1) }));

  render() {
    const { classes, ...rest } = this.props;
    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={(e, { suggestionValue }) => {
          this.handleAddChip(suggestionValue);
          e.preventDefault();
        }}
        focusInputOnSuggestionClick={false}
        inputProps={{
          classes,
          chips: this.state.value,
          onChange: this.handletextFieldInputChange,
          value: this.state.textFieldInput,
          onAdd: chip => this.handleAddChip(chip),
          onDelete: (chip, index) => this.handleDeleteChip(chip, index),
          ...rest,
        }}
      />
    );
  }
}
InputCategoriesAutoSuggest.displayName = 'InputCategoriesAutoSuggest';

InputCategoriesAutoSuggest.propTypes = {};

InputCategoriesAutoSuggest.defaultProps = {};

export default withStyles(styles)(InputCategoriesAutoSuggest);
