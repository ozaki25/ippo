import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import ChipInput from 'material-ui-chip-input';
import { MenuItem, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import CATEGORIES from 'src/constants/categories';

const renderInputComponent = ({
  onChange,
  onAdd,
  onDelete,
  onFocus,
  onBlur,
  onKeyDown,
  chips,
  ref,
  label,
}) => (
  <ChipInput
    label={label}
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
    <MenuItem
      selected={isHighlighted}
      component="div"
      onMouseDown={e => e.preventDefault()}
    >
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
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 1,
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

function InputCategoriesAutoSuggest({
  classes,
  label,
  value,
  handleAddChip,
  handleDeleteChip,
}) {
  const [inputValue, setInputValue] = React.useState('');
  const [chips, setChips] = React.useState([]);
  // const [value, setSelectedChips] = React.useState([]);

  // const handleAddChip = chip => {
  //   setSelectedChips([...value, chip]);
  // };

  // const handleDeleteChip = (chip, index) => {
  //   setSelectedChips(value.filter((val, i) => index !== i));
  // };

  const onChange = (e, { newValue }) => {
    console.log({ old: inputValue, new: newValue, event: e });
    setInputValue(newValue);
  };

  const onSuggestionsFetchRequested = props => {
    setChips(getSuggestions({ value: props.value, selected: value }));
  };

  const onSuggestionsClearRequested = () => {
    setChips([]);
  };

  const onSuggestionSelected = (e, { suggestionValue }) => {
    e.preventDefault();
    handleAddChip(suggestionValue);
  };

  return (
    <Autosuggest
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion,
      }}
      suggestions={chips}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      renderSuggestion={renderSuggestion}
      renderSuggestionsContainer={renderSuggestionsContainer}
      renderInputComponent={renderInputComponent}
      getSuggestionValue={getSuggestionValue}
      inputProps={{
        classes,
        label,
        chips: value,
        value: inputValue,
        onChange,
        onAdd: handleAddChip,
        onDelete: handleDeleteChip,
      }}
    />
  );
}

InputCategoriesAutoSuggest.displayName = 'InputCategoriesAutoSuggest';

InputCategoriesAutoSuggest.propTypes = {
  handleAddChip: propTypes.func.isRequired,
  handleDeleteChip: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.array.isRequired,
};

InputCategoriesAutoSuggest.defaultProps = {};

export default withStyles(styles)(InputCategoriesAutoSuggest);
