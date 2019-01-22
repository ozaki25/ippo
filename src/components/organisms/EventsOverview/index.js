import React from 'react';
import { Typography } from '@material-ui/core';
import { NavigateNextRounded } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventCardList from 'src/components/organisms/EventCardList';
import ShrinkSwipeable from 'src/components/templates/ShrinkSwipeable';
import IconWithText from 'src/components/templates/IconWithText';
import eventFormat from 'src/utils/eventFormat';
import ROUTES from 'src/constants/routes';

const EventsContainer = styled.div`
  margin-top: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkHeading = ({ linkTo, children }) => (
  <StyledLink to={linkTo}>
    <IconWithText>
      <NavigateNextRounded color="primary" />
      <Typography variant="h6" color="primary">
        {children}
      </Typography>
    </IconWithText>
  </StyledLink>
);

const EventsOverview = ({ joined, organized, recommended, internal, external, history }) => (
  <>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.JoinedEvents}>参加イベント</LinkHeading>
      <ShrinkSwipeable>
        {EventCardList({
          events: eventFormat.internal(joined),
          expand: true,
          noWrap: true,
          history,
        })}
      </ShrinkSwipeable>
    </EventsContainer>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.RecommendedEvents}>おすすめイベント</LinkHeading>
      <ShrinkSwipeable>
        {EventCardList({
          events: eventFormat.internal(recommended),
          expand: true,
          noWrap: true,
          history,
        })}
      </ShrinkSwipeable>
    </EventsContainer>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.InternalEvents}>社内イベント</LinkHeading>
      <ShrinkSwipeable>
        {EventCardList({
          events: eventFormat.internal(internal),
          expand: true,
          noWrap: true,
          history,
        })}
      </ShrinkSwipeable>
    </EventsContainer>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.ExternalEvents}>社外イベント</LinkHeading>
      <ShrinkSwipeable>
        {EventCardList({
          events: eventFormat.external(external),
          expand: true,
          noWrap: true,
        })}
      </ShrinkSwipeable>
    </EventsContainer>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.OrganizedEvents}>主催イベント</LinkHeading>
      <ShrinkSwipeable>
        {EventCardList({
          events: eventFormat.internal(organized),
          expand: true,
          noWrap: true,
          history,
        })}
      </ShrinkSwipeable>
    </EventsContainer>
  </>
);

EventsOverview.displayName = 'EventsOverview';

EventsOverview.propTypes = {
  joined: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  organized: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  recommended: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  internal: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  external: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      eventUrl: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

EventsOverview.defaultProps = {};

export default EventsOverview;
