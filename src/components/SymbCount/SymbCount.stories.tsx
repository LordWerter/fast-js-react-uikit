import React from 'react';

import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import SymbCount from './SymbCount';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SymbCount',
  component: SymbCount,
} as ComponentMeta<typeof SymbCount>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SymbCount> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <SymbCount {...args} />
    </StoryWrapper>
);

export const ValidData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ValidData.args = {
    sizeId: 'mobile',
    curNum: 4,
    maxNum: 24,
    customize: {}
};


export const WarnData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WarnData.args = {
    sizeId: 'mobile',
    curNum: 21,
    maxNum: 24,
    customize: {}
};

export const InvalidData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InvalidData.args = {
    sizeId: 'mobile',
    curNum: 27,
    maxNum: 24,
    customize: {}
};
