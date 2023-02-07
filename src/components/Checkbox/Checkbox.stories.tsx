import React from 'react';

import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import Checkbox from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <Checkbox {...args} />
    </StoryWrapper>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    id: 'CHECKBOX',
    text: 'Help me',
    sizeId: 'mobile',
    customize: {},
    onClick: () => console.warn('Checkbox onClick is OK!')
};
