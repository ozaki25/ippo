import gql from 'graphql-tag';

const hello = gql`
  query Hello {
    hello
    count
  }
`;

// const getEvents = gql`{}`;

export default {
  hello,
  // getEvents,
};
