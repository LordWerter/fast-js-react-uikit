import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import BasicBtn from './BasicBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic Button',
    component: BasicBtn,
} as ComponentMeta<typeof BasicBtn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicBtn> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <BasicBtn {...args} />
    </StoryWrapper>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    caption: 'Help me',
    sizeId: 'mobile',
    customize: {},
    handleOnClick: () => {
        console.warn('Basic Button onClick is OK!');
    },
    typeToken: null,
    hlaToken: 'STORYBOOK',
};
