import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { NavigateNextRounded } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventCardList from 'src/components/organisms/EventCardList';
import AsyncSwipeable from 'src/components/templates/AsyncSwipeable';
import IconWithText from 'src/components/templates/IconWithText';
import eventFormat from 'src/utils/eventFormat';
import ROUTES from 'src/constants/routes';

const EventsContainer = styled.div`
  margin: 8px 0;
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

const EventsOverview = ({ internal, external, history }) => (
  <>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.EnteredEvents}>参加イベント</LinkHeading>
      <AsyncSwipeable loading={false}>
        {EventCardList({ events: [], expand: true, noWrap: true, horizontal: true, history })}
      </AsyncSwipeable>
    </EventsContainer>
    <Divider light />
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.RecommendedEvents}>おすすめイベント</LinkHeading>
      <AsyncSwipeable loading={false}>
        {EventCardList({ events: [], expand: true, noWrap: true, horizontal: true, history })}
      </AsyncSwipeable>
    </EventsContainer>
    <Divider light />
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.InternalEvents}>社内イベント</LinkHeading>
      <AsyncSwipeable loading={internal.loading}>
        {EventCardList({
          events: eventFormat.internal(internal.internalEvents),
          expand: true,
          noWrap: true,
          horizontal: true,
          history,
        })}
      </AsyncSwipeable>
    </EventsContainer>
    <Divider light />
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.ExternalEvents}>社外イベント</LinkHeading>
      <AsyncSwipeable loading={external.loading}>
        {EventCardList({
          events: eventFormat.external(external.connpass),
          expand: true,
          noWrap: true,
          horizontal: true,
        })}
      </AsyncSwipeable>
    </EventsContainer>
    <Divider light />
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.OrganizedEvents}>主催イベント</LinkHeading>
      <AsyncSwipeable loading={false}>
        {EventCardList({ events: [], expand: true, noWrap: true, horizontal: true, history })}
      </AsyncSwipeable>
    </EventsContainer>
    <Divider light />
  </>
);

EventsOverview.displayName = 'EventsOverview';

EventsOverview.propTypes = {
  internal: propTypes.shape({
    loading: propTypes.bool.isRequired,
    internalEvents: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
  }).isRequired,
  external: propTypes.shape({
    loading: propTypes.bool.isRequired,
    connpass: propTypes.shape({
      events: propTypes.arrayOf(
        propTypes.shape({
          event_id: propTypes.number,
          title: propTypes.string,
          event_url: propTypes.string,
          catch: propTypes.string,
          place: propTypes.string,
          started_at: propTypes.string,
        }),
      ),
    }),
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

EventsOverview.defaultProps = {};

export default EventsOverview;