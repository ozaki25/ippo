import React from 'react';

const withTab = Component => props => (
  <Component
    {...props}
    tab={new URLSearchParams(props.location.search).get('tab') || null }
  />
);

export default withTab;
