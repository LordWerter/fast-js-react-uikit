import React from 'react';

import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { mockedTheme } from '../../constants';
import StoryWrapper from '../../containers/StoryWrapper';
import Counter from './Dropbox';

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
    defaultItemKey: 'item1',
    items: {
        item1: {
            key: 'item1',
            text: 'Item 1',
            handleOnClick: () => {
                console.log(true);
            }
        },
        item2: {
            key: 'item2',
            text: 'Item 2',
            handleOnClick: () => {
                console.log('item2');
            }
        },
        item3: {
            key: 'item3',
            text: 'Item 3',
            handleOnClick: () => {
                console.log('item3');
            }
        },
        item4: {
            key: 'item4',
            text: 'Item 4',
            handleOnClick: () => {
                console.log('item4');
            }
        },
        item5: {
            key: 'item5',
            text: 'Item 5',
            handleOnClick: () => {
                console.log('item5');
            }
        },
    },
};
