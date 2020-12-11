import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import MockRouter from 'react-mock-router';
import { Provider } from 'react-redux';
import store from 'src/modules/createStore';

configure({ adapter: new Adapter() });

export const elementToJson = element =>
  toJson(
    mount(
      <Provider store={store}>
        <MockRouter>{element}</MockRouter>
      </Provider>,
    ),
  );

export const snapshot = (title, element) =>
  it(`should match snapshot: ${title}`, () => {
    expect(elementToJson(element)).toMatchSnapshot();
  });
