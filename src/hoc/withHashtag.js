import React from 'react';

const withHashtag = Component => props => (
  <Component
    {...props}
    hashtag={new URLSearchParams(props.location.search).get('hashtag') || 'none'}
  />
);

export default withHashtag;
