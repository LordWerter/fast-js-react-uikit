# Input Component

- [Input Component](#input-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Input based on got props.

## Component Props
<!-- markdownlint-disable MD033 -->
|           Name            |                                                 Type                                                  | Description                                   |         Example         |
| :-----------------------: | :---------------------------------------------------------------------------------------------------: | --------------------------------------------- | :---------------------: |
|          sizeId           |                            TSize = `'mobile'` \| `'laptop'` \| `'desktop'`                            | Device used                                   |       `'mobile'`        |
|           Label           |                                                 `any`                                                 | Object with content of a Label component      |  `{title, text, ...}`   |
|           Value           |                                               `string`                                                | Value of InputBox component                   |     `'Some Value'`      |
|        Placeholder        |                                          `string` \| `null`                                           | Value of InputBox component                   |     `'Some Value'`      |
|         disabled          |                                               `boolean`                                               | Disabled flag of InputBox component           |         `true`          |
|           theme           | {<br> wrapper: `any`, <br> Label: `any`, <br> input: `any`, <br> Placeholder: `any`, <br>} \| `null`; | Themes objects                                |    `{theme.wrapper}`    |
|         customize         |                                                 `any`                                                 | Custom theme object                           | `{customize.container}` |
|  withReset2EmptyValueBtn  |                                               `boolean`                                               | ???                                           |         `true`          |
| handleReset2EmptyValueBtn |                                              `() => any`                                              | ???                                           |       `() => {};`       |
|         onChange          |                       `(event: ChangeEvent<HTMLInputElement>) => any` \| `null`                       | The event listener of changing of a component |   `onChange={()=>{}}`   |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Input} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Input />
    </>);
};

export default OurContainer;

```
