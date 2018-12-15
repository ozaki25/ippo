import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {} from '@blueprintjs/core';
import NavigationBar from 'src/components/molecules/NavigationBar';
import EventCreateForm from 'src/components/organisms/EventCreateForm';

const Container = styled.div`
  padding: 10px 15px;
`;

const NewEvent = ({ createEvent }) => {
  return (
    <>
      <NavigationBar appName="IPPO" />
      <Container>
        <EventCreateForm onSubmit={event => createEvent({ variables: { event } })} />
      </Container>
    </>
  );
};

NewEvent.displayName = 'NewEvent';

NewEvent.propTypes = {
  createEvent: propTypes.func,
};

NewEvent.defaultProps = {};

export default NewEvent;
