import React from 'react';
import propTypes from 'prop-types';
import {
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
} from '@material-ui/core';

const ListItemUtil = ({ primary, secondary, onChange, checked, disabled, toggle, checkbox }) => (
  <ListItem>
    <ListItemText primary={primary} secondary={secondary} />
    {checkbox && (
      <ListItemSecondaryAction>
        <Checkbox color="primary" onChange={onChange} checked={checked} disabled={disabled} />
      </ListItemSecondaryAction>
    )}
    {toggle && (
      <ListItemSecondaryAction>
        <Switch color="primary" onChange={onChange} checked={checked} disabled={disabled} />
      </ListItemSecondaryAction>
    )}
  </ListItem>
);

ListItemUtil.displayName = 'ListItemUtil';

ListItemUtil.propTypes = {
  primary: propTypes.string.isRequired,
  secondary: propTypes.string,
  onChange: propTypes.func,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  toggle: propTypes.bool,
  checkbox: propTypes.bool,
};

ListItemUtil.defaultProps = {
  secondary: '',
  disabled: false,
  onChange: null,
  checked: false,
  toggle: false,
  checkbox: false,
};

export default ListItemUtil;
