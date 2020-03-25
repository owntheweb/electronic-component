// TODO: Grr. Testing is still a weak point. See if there are additional ways to test this.

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlphanumericDisplay from '../AlphanumericDisplay';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const component = shallow(<AlphanumericDisplay/>);
  expect(component).toMatchSnapshot();
});

it('should render correctly with characters prop set', () => {
  const component = shallow(<AlphanumericDisplay characters="test" />);
  expect(component).toMatchSnapshot();
});

it('should render correctly with animationTime prop set', () => {
  const component = shallow(<AlphanumericDisplay animationTime={100} />);
  expect(component).toMatchSnapshot();
});

it('should render correctly with characterCount prop set', () => {
  const component = shallow(<AlphanumericDisplay characterCount={3} />);
  expect(component).toMatchSnapshot();
});

it('should render correctly with addSpace prop set', () => {
  const component = shallow(<AlphanumericDisplay addSpace={true} />);
  expect(component).toMatchSnapshot();
});

it('should render correctly with scrollAmount prop set', () => {
  const component = shallow(<AlphanumericDisplay scrollAmount={2} />);
  expect(component).toMatchSnapshot();
});