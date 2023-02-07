import React from 'react';

import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import Optionbox from './Optionbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Optionbox',
  component: Optionbox,
} as ComponentMeta<typeof Optionbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Optionbox> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <Optionbox {...args} />
    </StoryWrapper>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    id: 'OPTION_BTN',
    text: 'Help me',
    sizeId: 'mobile',
    customize: {},
    onClick: () => {
        console.warn('Optionbox onClick is OK!');
    }
};
