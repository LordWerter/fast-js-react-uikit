# InputWithMask Component

- [InputWithMask Component](#inputwithmask-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom InputWithMask on got props.

## Component Props

|   Name    |                      Type                       | Description                                   |         Example         |
| :-------: | :---------------------------------------------: | --------------------------------------------- | :---------------------: |
|  sizeId   | TSize = `'mobile'` \| `'laptop'` \| `'desktop'` | Device used                                   |       `'mobile'`        |
|   Value   |                    `string`                     | Value of InputWithMask component              |     `'Some Value'`      |
|  params   |                      `any`                      | Object with parameters                        | `{params.Placeholder}`  |
|  onClick  |              `(event: any) => any`              | The event listener of clicking on a component |   `onClick={()=>{}}`    |
| customize |                      `any`                      | Custom theme object                           | `{customize.container}` |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {InputWithMask} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <InputWithMask />
    </>);
};

export default OurContainer;

```
