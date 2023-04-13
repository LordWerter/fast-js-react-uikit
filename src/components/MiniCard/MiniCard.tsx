import React from 'react';

import { SizeId } from 'definitions/proptypes';
import { mergeThemeObjects } from 'utils';

import { useTheme } from '@emotion/react';

import {
    CWrap,
    nodeDict,
} from './MiniCard.styles';

export type TNode = {
    name: string;
    text?: string;
    src?: string; // relative or absolute path to img file || base64 img string || url to img file
    href?: string; // link for route
    handleOnClick?: React.MouseEventHandler<HTMLElement>;
};

export type TFCTheme = {

};

export interface Props {
    sizeId: SizeId;
    data: TNode[];
    customize?: any;
    handleOnClick?: any;
}


export const MiniCard: React.FC<Props> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        customize = {},
        data = [],
        handleOnClick,
    } = props;

    // @ts-ignore
    const theme = { ...useTheme().MiniCard };
    // const requiredThemeKeys = ['container', 'image', 'title', 'images']; // it's for checking required theme keys

    Object.keys(theme).forEach((elementName: string) => {
        theme[elementName] = mergeThemeObjects(theme[elementName], customize[elementName]);
    });

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.CWrap}
            data-testid={''}
            onClick={() => {
                handleOnClick && handleOnClick();
            }}>
            {!!data.length && data.map((targetNode: TNode) => {
                const {name, text, src = '', href, handleOnClick } = targetNode;
                const CurNode = nodeDict[name];
                let nodeProps: any = {
                    sizeId,
                    theme: theme[name.toLowerCase()],
                };
                if (name === 'Image') nodeProps = { ...nodeProps, style: {
                    backgroundImage: `url('${src}')`,
                } };
                return (<CurNode {...nodeProps} onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
                    !!handleOnClick && handleOnClick(event);
                }}>
                    {!!text && text}
                </CurNode>);
            })}
        </CWrap>
    );
};

export default MiniCard;
