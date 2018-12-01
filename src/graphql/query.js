import gql from 'graphql-tag';

const hello = gql`
  query Hello {
    hello
    number
  }
`;

// const getEvents = gql`{}`;

export default {
  hello,
  // getEvents,
};
