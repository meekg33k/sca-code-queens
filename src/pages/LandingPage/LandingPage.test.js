import React from 'react';
import Jumbotron from "../../components/Jumbotron";
import LandingPage from './index';
import { shallow } from 'enzyme';

describe('Landing Page render', () => {
  const wrapper = shallow(<LandingPage />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the Jumbotron', () => {
    const JumbotronComponent = wrapper.find(Jumbotron);
    expect(JumbotronComponent).toHaveLength(1);
  });
});