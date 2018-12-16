import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

export const elementToJson = element => toJson(mount(element));

export const snapshot = (title, element) =>
  it(`should match snapshot: ${title}`, () => {
    expect(elementToJson(element)).toMatchSnapshot();
  });
