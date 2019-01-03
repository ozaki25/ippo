import React from 'react';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import CustomCard from 'src/components/molecules/CustomCard';

const EventCard = ({ title, eventUrl, catchMessage, place, datetime, expand, noWrap, history }) => (
  <CustomCard expand={expand} url={eventUrl} history={history}>
    <Typography variant="h6" noWrap={noWrap}>
      {title}
    </Typography>
    {catchMessage && <Typography noWrap={noWrap}>{`概要：${catchMessage}`}</Typography>}
    {place && <Typography noWrap={noWrap}>{`場所：${place}`}</Typography>}
    {datetime && <Typography noWrap={noWrap}>{`日時：${datetime}`}</Typography>}
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
  noWrap: propTypes.bool,
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

EventCard.defaultProps = {
  catchMessage: '',
  place: '',
  datetime: '',
  expand: false,
  noWrap: false,
  history: null,
};

export default EventCard;
