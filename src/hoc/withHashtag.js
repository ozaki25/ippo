import React from 'react';

const withHashtag = Component => ({ location: { search }, ...props }) => (
  <Component {...props} hashtag={new URLSearchParams(search).get('hashtag') || 'none'} />
);

export default withHashtag;
