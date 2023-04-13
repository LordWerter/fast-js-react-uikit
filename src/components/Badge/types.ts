import { CSSObject } from '@emotion/react';

export enum BadgeElemName {
    CWrap,
    Caption,
}

export type BadgeTheme = {
    [key in BadgeElemName]: CSSObject;
}