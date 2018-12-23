import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Card, Elevation, Text } from '@blueprintjs/core';

const onClick = url => window.open(url, '_blank');

const StyledCard = styled(Card)`
  min-height: ${({ expand }) => (expand ? '130px' : 'inherit')};
`;

const EventCard = ({ title, eventUrl, catchMessage, place, datetime, interactive, expand }) => (
  <StyledCard
    expand={expand ? 1 : 0}
    interactive={interactive}
    onClick={() => onClick(eventUrl)}
    elevation={Elevation.TWO}
  >
    <h3 className="bp3-heading">{title}</h3>
    {catchMessage && <Text>{`概要：${catchMessage}`}</Text>}
    {place && <Text>{`場所：${place}`}</Text>}
    {datetime && <Text>{`日時：${datetime}`}</Text>}
  </StyledCard>
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
};

EventCard.defaultProps = {
  catchMessage: '',
  place: '',
  datetime: '',
  interactive: true,
  expand: false,
};

export default EventCard;
