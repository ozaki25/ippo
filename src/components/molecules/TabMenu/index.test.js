import React from 'react';
import { snapshot } from 'test/helpers';
import TabMenu from '.';

const item = i => ({
  id: String(i),
  title: String(i),
  Component: () => <p>{String(i)}</p>,
});

const props = times => ({
  items: [...Array(times)].map((_, i) => item(i)),
});

snapshot('TabMenu/tab1', <TabMenu {...props(1)} />);

snapshot('TabMenu/tab2', <TabMenu {...props(2)} />);

snapshot('TabMenu/tab3', <TabMenu {...props(3)} />);

snapshot('TabMenu/tab4', <TabMenu {...props(4)} />);
