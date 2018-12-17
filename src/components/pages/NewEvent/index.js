import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import NavigationBar from 'src/components/molecules/NavigationBar';
import EventCreateForm from 'src/components/organisms/EventCreateForm';

const Container = styled.div`
  padding: 10px 15px;
`;

const NewEvent = ({ createEvent, history }) => {
  return (
    <>
      <NavigationBar appName="IPPO" />
      <Container>
        <EventCreateForm
          onSubmit={event => {
            history.push('/events');
            return createEvent({ variables: { event } });
          }}
        />
      </Container>
    </>
  );
};

NewEvent.displayName = 'NewEvent';

NewEvent.propTypes = {
  createEvent: propTypes.func,
};

NewEvent.defaultProps = {};

export default withRouter(NewEvent);
