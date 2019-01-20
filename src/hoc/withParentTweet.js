import React from 'react';

const withParentTweet = Component => props => (
  <Component
    {...props}
    parentId={new URLSearchParams(props.location.search).get('parent') || null}
  />
);

export default withParentTweet;
