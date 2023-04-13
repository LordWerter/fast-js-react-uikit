import React from 'react';

import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import SelectorButton from './SelectorBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Selector Button',
  component: SelectorButton,
} as ComponentMeta<typeof SelectorButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectorButton> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <SelectorButton {...args} />
    </StoryWrapper>
);

export const SelectorBtnInst = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectorBtnInst.args = {
    sizeId: 'mobile',
    initCaption: 'Choose action...',
    options: [
        {
            Caption: 'Send Request',
            onClick: () => console.log('Send Request Action was clicked'),
        },
        {
            Caption: 'Fetch Data',
            onClick: () => console.log('Fetch Data Action was clicked'),
        },
        {
            Caption: 'Logout',
            onClick: () => console.log('Logout Action was clicked'),
        },
    ],
    customize: {},
};
