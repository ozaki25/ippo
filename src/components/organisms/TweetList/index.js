import React from 'react';
import propTypes from 'prop-types';
import Tweet from 'src/components/molecules/Tweet';

const TweetList = ({ items }) => items.map(item => <Tweet key={item.id} {...item} />);

TweetList.displayName = 'TweetList';

TweetList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
      time: propTypes.string.isRequired,
    }),
  ),
};

TweetList.defaultProps = {
  items: [],
};

export default TweetList;
