import { CSSObject, Theme } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

export interface StyledNodeDescriptor {
    name: string;
    tag: string;
}

export type FCStyledNodeDescriptors<ElemNamesEnum extends string> = Record<
    ElemNamesEnum,
    StyledNodeDescriptor
>;

export type FCStyledNodes<ElemNamesEnum extends string> = Record<
    ElemNamesEnum,
    StyledComponent<
        {
            theme?: Theme | undefined;
            as?: React.ElementType<any> | undefined;
        },
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLHeadingElement>,
            HTMLHeadingElement
        >,
        {}
    >
>;

export type FCTheme<ElemNamesEnum extends string> = Record<
    ElemNamesEnum,
    CSSObject
>;
