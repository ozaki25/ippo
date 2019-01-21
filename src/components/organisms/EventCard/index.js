import React from 'react';
import { Typography } from '@material-ui/core';
import { AccessTimeRounded, DescriptionOutlined, PlaceOutlined } from '@material-ui/icons';
import propTypes from 'prop-types';
import CustomCard from 'src/components/molecules/CustomCard';
import IconWithText from 'src/components/templates/IconWithText';

const EventCard = ({ title, eventUrl, catchMessage, place, datetime, expand, noWrap, history }) => (
  <CustomCard expand={expand} url={eventUrl} history={history}>
    <Typography variant="h5" noWrap={noWrap}>
      {title}
    </Typography>
    {catchMessage && (
      <>
        <IconWithText fullWidth>
          <DescriptionOutlined fontSize="small" />
          <Typography noWrap={noWrap}>{catchMessage}</Typography>
        </IconWithText>
        <br />
      </>
    )}
    {place && (
      <>
        <IconWithText fullWidth>
          <PlaceOutlined fontSize="small" />
          <Typography noWrap={noWrap}>{place}</Typography>
        </IconWithText>
        <br />
      </>
    )}
    {datetime && (
      <>
        <IconWithText fullWidth>
          <AccessTimeRounded fontSize="small" />
          <Typography noWrap={noWrap}>{datetime}</Typography>
        </IconWithText>
        <br />
      </>
    )}
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
