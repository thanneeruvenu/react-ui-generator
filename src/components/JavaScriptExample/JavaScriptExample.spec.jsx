import * as React from 'react';
import { EDSApplication, Typography } from '@hedtech/react-design-system/core';
import { mount, shallow } from 'enzyme';
import JavaScriptExample from './JavaScriptExample';
import { IntlProvider } from 'react-intl';
describe('JavaScriptExample component tests', () => {
    it('should render without error', () => {
        const view = shallow(
            <EDSApplication>
                <JavaScriptExample />
            </EDSApplication>
        );
        expect(view.length).toBe(1);
    });
    it('should render with text', () => {
        const view = mount(
            <IntlProvider locale={'en'} messages={{
                javaScriptExampleText: 'test text',
                javaScriptExampleTitle: 'test title',
            }}>
                <EDSApplication>
                    <JavaScriptExample/>
                </EDSApplication>
            </IntlProvider>
        );
        const nodes = view.find(Typography);
        expect(nodes.length).toBe(2);
        expect(nodes.at(0).text()).toBe('test title');
        expect(nodes.at(1).text()).toBe('test text');
    });
});
