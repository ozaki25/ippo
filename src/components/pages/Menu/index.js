import React from 'react';
import { Typography } from '@material-ui/core';
import { AddRounded, NavigateNextRounded } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomCard from 'src/components/molecules/CustomCard';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import AsyncSwipeable from 'src/components/templates/AsyncSwipeable';
import IconWithText from 'src/components/templates/IconWithText';
import eventFormat from 'src/utils/eventFormat';
import ROUTES from 'src/constants/routes';

const CardContainer = styled.div`
  margin: 2px 0;
  text-align: center;
`;

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

const Menu = ({ internal, external, authUser, history, firebase }) => (
  <Container title="IPPO" authUser={authUser} history={history} firebase={firebase} noPadding>
    <EventsContainer>
      <LinkHeading linkTo={ROUTES.EnteredEvents}>参加イベント</LinkHeading>
      <AsyncSwipeable loading={false}>
        {EventCardList({ events: [], expand: true, horizontal: true, history })}
      </AsyncSwipeable>
    </EventsContainer>

    <EventsContainer>
      <LinkHeading linkTo={ROUTES.RecommendedEvents}>おすすめイベント</LinkHeading>
      <AsyncSwipeable loading={false}>
        {EventCardList({ events: [], expand: true, horizontal: true, history })}
      </AsyncSwipeable>
    </EventsContainer>

    <EventsContainer>
      <LinkHeading linkTo={ROUTES.InternalEvents}>社内イベント</LinkHeading>
      <AsyncSwipeable loading={internal.loading}>
        {EventCardList({
          events: eventFormat.internal(internal.internalEvents),
          expand: true,
          horizontal: true,
          history,
        })}
      </AsyncSwipeable>
    </EventsContainer>

    <EventsContainer>
      <LinkHeading linkTo={ROUTES.ExternalEvents}>社外イベント</LinkHeading>
      <AsyncSwipeable loading={external.loading}>
        {EventCardList({
          events: eventFormat.external(external.connpass),
          expand: true,
          horizontal: true,
        })}
      </AsyncSwipeable>
    </EventsContainer>

    <EventsContainer>
      <LinkHeading linkTo={ROUTES.OrganizedEvents}>主催イベント</LinkHeading>
      <AsyncSwipeable loading={false}>
        <CardContainer>
          <CustomCard url={ROUTES.NewEvent} history={history}>
            <IconWithText>
              <AddRounded />
              <Typography variant="h6">イベント作成</Typography>
            </IconWithText>
          </CustomCard>
        </CardContainer>
        {EventCardList({ events: [], expand: true, horizontal: true, history })}
      </AsyncSwipeable>
    </EventsContainer>
  </Container>
);

Menu.displayName = 'Menu';

Menu.propTypes = {
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
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

Menu.defaultProps = {};

export default Menu;
