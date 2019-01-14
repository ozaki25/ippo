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

const EventsOverview = ({ joined, organized, internal, external, history }) => (
  <>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.JoinedEvents}>参加イベント</LinkHeading>
      <AsyncSwipeable loading={joined.loading}>
        {EventCardList({
          events: joined.loading ? [] : eventFormat.internal(joined.joinedEvents.items),
          expand: true,
          noWrap: true,
          horizontal: true,
          history,
        })}
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
          events: external.loading ? [] : eventFormat.external(external.externalEvents.items),
          expand: true,
          noWrap: true,
          horizontal: true,
        })}
      </AsyncSwipeable>
    </EventsContainer>
    <Divider light />
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.OrganizedEvents}>主催イベント</LinkHeading>
      <AsyncSwipeable loading={organized.loading}>
        {EventCardList({
          events: organized.loading ? [] : eventFormat.internal(organized.organizedEvents.items),
          expand: true,
          noWrap: true,
          horizontal: true,
          history,
        })}
      </AsyncSwipeable>
    </EventsContainer>
    <Divider light />
  </>
);

EventsOverview.displayName = 'EventsOverview';

EventsOverview.propTypes = {
  joined: propTypes.shape({
    loading: propTypes.bool.isRequired,
    joinedEvents: propTypes.shape({
      items: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
    }),
  }).isRequired,
  organized: propTypes.shape({
    loading: propTypes.bool.isRequired,
    organizedEvents: propTypes.shape({
      items: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
    }),
  }).isRequired,
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
    externalEvents: propTypes.shape({
      items: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          eventUrl: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
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
