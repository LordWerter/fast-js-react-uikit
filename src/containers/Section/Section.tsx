import React from 'react';

import { useTheme } from '@emotion/react';

import { TSize } from '../../definitions/IPropTypes';
import {
    CWrap,
    Description,
    SectionContent,
    Title,
} from './Section.styles';

export type IProps = {
    sizeId?: TSize;
    customize?: any;
    typeToken?: string | null;
    langs?: any;
    sectionType: string;
};

export const Section: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId, langs, sectionType, children } = props;

    // @ts-ignore
    const theme = { ...useTheme().Section[sectionType] };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} data-testid={'section__cwrap'}>
            <SectionContent sizeId={sizeId} theme={theme.sectioncontent} data-testid={'section__section-content'}>
                {langs?.title && <Title sizeId={sizeId} theme={theme.title} data-testid={'section__title'}>
                    {langs.title}
                </Title>}
                {langs?.description && <Description sizeId={sizeId} theme={theme.description} data-testid={'section__description'}>
                    {langs.description}
                </Description>}
                {children}
            </SectionContent>
        </CWrap>
    );
};

export default Section;
