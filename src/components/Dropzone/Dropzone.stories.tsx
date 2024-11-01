import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import Dropzone from './Dropzone';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Dropzone',
    component: Dropzone,
} as ComponentMeta<typeof Dropzone>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropzone> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <Dropzone {...args} />
    </StoryWrapper>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    text: 'Help me',
    sizeId: 'mobile',
    customize: {},
    onClick: () => {
        console.warn('Basic Button onClick is OK!');
    },
};
