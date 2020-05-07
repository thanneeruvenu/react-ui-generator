import * as React from 'react';
import { EDSApplication } from '@hedtech/react-design-system/core';
import { mount, shallow } from 'enzyme';
import Home from './Home';
import JavaScriptExample from '../JavaScriptExample';
import TypeScriptExample from '../TypeScriptExample';
import { IntlProvider } from 'react-intl';
describe('Home component tests', () => {
    it('should render without error', () => {
        const home = shallow(
            <EDSApplication>
                <Home/>
            </EDSApplication>
        );
        expect(home.length).toBe(1);
    });
    it('should have both Hello and World components', () => {
        const home = mount(
            <IntlProvider locale={'en'} messages={{
                homePageTitle: 'test string 2',
                javaScriptExampleText: 'test text',
                javaScriptExampleTitle: 'test title',
                typeScriptExampleText: 'test text',
                typeScriptExampleTitle: 'test title',
            }}>
                <EDSApplication>
                    <Home/>
                </EDSApplication>
            </IntlProvider>
        );
        const js = home.find(JavaScriptExample);
        expect(js.length).toBe(1);
        const ts = home.find(TypeScriptExample);
        expect(ts.length).toBe(1);
    });
});
