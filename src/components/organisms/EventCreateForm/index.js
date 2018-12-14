import React from 'react';
import propTypes from 'prop-types';
import { FormGroup, InputGroup } from '@blueprintjs/core';

const EventCreateForm = ({}) => (
  <FormGroup
    helperText="Helper text with details..."
    label="Label A"
    labelFor="text-input"
    labelInfo="(required)"
  >
    <InputGroup id="text-input" placeholder="Placeholder text" />
  </FormGroup>
);

EventCreateForm.displayName = 'EventCreateForm';

EventCreateForm.propTypes = {};

EventCreateForm.defaultProps = {};

export default EventCreateForm;
