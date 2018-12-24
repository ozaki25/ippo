import React from 'react';
import propTypes from 'prop-types';
import { Text } from '@blueprintjs/core';
import CustomCard from 'src/components/molecules/CustomCard';

const EventCard = ({
  title,
  eventUrl,
  catchMessage,
  place,
  datetime,
  interactive,
  expand,
  history,
}) => (
  <CustomCard expand={expand} interactive={interactive} url={eventUrl} history={history}>
    <h3 className="bp3-heading">{title}</h3>
    {catchMessage && <Text>{`概要：${catchMessage}`}</Text>}
    {place && <Text>{`場所：${place}`}</Text>}
    {datetime && <Text>{`日時：${datetime}`}</Text>}
  </CustomCard>
);

EventCard.displayName = 'EventCard';

EventCard.propTypes = {
  title: propTypes.string.isRequired,
  eventUrl: propTypes.string.isRequired,
  catchMessage: propTypes.string,
  place: propTypes.string,
  datetime: propTypes.string,
  interactive: propTypes.bool,
  expand: propTypes.bool,
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

EventCard.defaultProps = {
  catchMessage: '',
  place: '',
  datetime: '',
  interactive: true,
  expand: false,
  history: null,
};

export default EventCard;
