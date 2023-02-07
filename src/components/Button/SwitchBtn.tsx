import React from 'react';

import { useTheme } from '@emotion/react';

import { TSize } from '../../definitions/IPropTypes';
/**
 * imports of utils
 */
import {
    genComponentElement,
    mergeThemeObjects,
} from '../../utils';

export type TProps = {
    text: string;
    sizeId?: TSize;
    customize?: any;
    typeToken?: string | null;
    onClick?: MouseEvent;
}

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const SwitchBtn: React.FC<TProps> = (props): JSX.Element => {
    const { text, onClick, sizeId = 'mobile', customize = {}, typeToken = null } = props;

    const CWrap = genComponentElement('button');
    const Caption = genComponentElement('span');

    // @ts-ignore
    const componentStylesObj = { ...useTheme().components.Button };
    const targetTheme = typeToken ? { ...componentStylesObj[typeToken] } : { ...componentStylesObj };
    const requiredNodeNames = ['cwrap', 'caption', 'icon', 'image'];
    const theme: any = {};

    requiredNodeNames.forEach((curKey: string) => {
        theme[curKey] = mergeThemeObjects(targetTheme[curKey], customize[curKey]);
    });

    // TODO: add hover effect
    return (
        <CWrap sizeId={sizeId} theme={theme.container} onClick={onClick}>
            {text && (
                <Caption sizeId={sizeId} theme={theme.caption}>
                    {text}
                </Caption>
            )}
        </CWrap>
    );
};

export default SwitchBtn;
