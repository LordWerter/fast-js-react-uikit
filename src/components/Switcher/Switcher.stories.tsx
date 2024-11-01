import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import Switcher from './Switcher';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Switcher',
    component: Switcher,
} as ComponentMeta<typeof Switcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switcher> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <Switcher {...args} />
    </StoryWrapper>
);

export const BasicUsage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicUsage.args = {
    sizeId: 'mobile',
    isEnabled: false,
    isDisabled: false,
    customize: {},
    langs: {
        leftLabel: 'OFF',
        rightLabel: 'ON',
    },
    onClick: (event) => {
        console.warn('SWITCHER::TRACE::EVT - ', event);
    },
};

export const WarnData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WarnData.args = {
    sizeId: 'mobile',
    isEnabled: true,
    isDisabled: false,
    customize: {},
    langs: {
        leftLabel: 'OFF',
        rightLabel: 'ON',
    },
    onClick: (event) => {
        console.warn('SWITCHER::TRACE::EVT - ', event);
    },
};

export const InvalidData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InvalidData.args = {
    sizeId: 'mobile',
    isEnabled: true,
    isDisabled: true,
    customize: {},
    langs: {
        leftLabel: 'OFF',
        rightLabel: 'ON',
    },
    onClick: (event) => {
        console.warn('SWITCHER::TRACE::EVT - ', event);
    },
};
