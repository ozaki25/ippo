import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import propTypes from 'prop-types';
import './index.css';

const TabMenu = ({ items }) => (
  <Tabs className="tabs-fill">
    {items.map(({ Component, id, title }) => (
      <Tab key={id} id={id} title={title} panel={<Component />} />
    ))}
  </Tabs>
);

TabMenu.displayName = 'TabMenu';

TabMenu.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      Component: propTypes.element,
    }),
  ),
};

TabMenu.defaultProps = {
  items: [],
};

export default TabMenu;
