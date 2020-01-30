import React from 'react'
import { mount } from 'enzyme';
import Mount from './Mount'

describe('mount renders', () => {
    window.alert = jest.fn();
    const item = { text: "Clean the pot" };
    it('renders without crashing', () => {
        const app = mount(<Mount text={item.text} />);
        expect(app.find(".par").text()).toEqual(item.text);
    })
})