import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from 'src/components/molecules/Card';

const ListItem = styled.div`
  margin: 8px 0;
`;

const CardList = ({ items }) => (
  <>
    {items.map(item => (
      <ListItem key={item.id}>
        <Card interactive={item.interactive} onClick={item.onClick}>
          {item.body}
        </Card>
      </ListItem>
    ))}
  </>
);

CardList.displayName = 'CardList';

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.node,
      interactive: PropTypes.bool,
      onClick: PropTypes.func,
    }),
  ),
};

CardList.defaultProps = {
  items: [],
};

export default CardList;
