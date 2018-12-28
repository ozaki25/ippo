import React from 'react';
import propTypes from 'prop-types';
import CustomCard from 'src/components/molecules/CustomCard';
import { Typography } from '@material-ui/core';

const EventCard = ({ title, eventUrl, catchMessage, place, datetime, expand, history }) => (
  <CustomCard expand={expand} url={eventUrl} history={history}>
    <h3 className="bp3-heading">{title}</h3>
    {catchMessage && <Typography>{`概要：${catchMessage}`}</Typography>}
    {place && <Typography>{`場所：${place}`}</Typography>}
    {datetime && <Typography>{`日時：${datetime}`}</Typography>}
  </CustomCard>
);

EventCard.displayName = 'EventCard';

EventCard.propTypes = {
  title: propTypes.string.isRequired,
  eventUrl: propTypes.string.isRequired,
  catchMessage: propTypes.string,
  place: propTypes.string,
  datetime: propTypes.string,
  expand: propTypes.bool,
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

EventCard.defaultProps = {
  catchMessage: '',
  place: '',
  datetime: '',
  expand: false,
  history: null,
};

export default EventCard;
