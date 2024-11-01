import { CSSObject } from '@emotion/react';
import { BadgeElemNames } from 'enums';

export type BadgeTheme = {
    [key in BadgeElemNames]: CSSObject;
};
