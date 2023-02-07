import React from 'react';

import { useTheme } from '@emotion/react';

import { TSize } from '../../definitions/IPropTypes';
import { mergeThemeObjects } from '../../utils';
import { CWrap } from './MiniCard.styles';

export type TNode = {
    name: string;
    tag: string;
    text?: string;
    src?: string; // relative or absolute path to img file || base64 img string || url to img file
    href?: string; // link for route
    handleOnClick?: React.MouseEventHandler<HTMLElement>;
};

export type TFCTheme = {

};

export type TProps = {
    sizeId: TSize;
    data: TNode[];
    customize?: any;
    handleOnClick?: any;
}


export const MiniCard: React.FC<TProps> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        customize = {},
        data = [],
        handleOnClick,
    } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.MiniCard };
    // const requiredThemeKeys = ['container', 'image', 'title', 'images']; // it's for checking required theme keys

    Object.keys(theme).forEach((elementName: string) => {
        theme[elementName] = mergeThemeObjects(theme[elementName], customize[elementName]);
    });

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            onClick={() => {
                handleOnClick && handleOnClick();
            }}>
            {!!data.length && data.map((targetNode: TNode) => {
                const {name, tag, text, src, href, handleOnClick } = targetNode;
                const CurNode = nodesDict[tag];
                const nodeProps = {
                    sizeId,
                    theme: theme[name.toLowerCase()],
                };
                return (<CurNode {...nodeProps} >
                    {text && text}
                </CurNode>);
            })}
        </CWrap>
    );
};

export default MiniCard;
