import React from 'react';

import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import Counter from './Counter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Counter> = (args) => (
    <StoryWrapper theme={mockedTheme} initialEntries={['/']}>
        <Counter {...args} />
    </StoryWrapper>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    sizeId: 'mobile',
    customize: {},
    countParams: {
        initValue: 0,
        measure: 1,
        maxLimit: 10,
        minLimit: -10,
    },
    handleIncrement: (curValue: number) => {
        console.warn(`Value after incrementing is ${curValue}`);
    },
    handleDecrement: (curValue: number) => {
        console.warn(`Value after decrementing is ${curValue}`);
    },
};
