import React from 'react';

/**
 * imports of utils
 */
import { BasicButtonElems } from '../../constants';
import { TSize } from '../../definitions/IPropTypes';
import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export type TProps = {
    text: string;
    sizeId?: TSize;
    customize?: any;
    typeToken?: string | null;
    onClick?: (evt: Event) => unknown;
}

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const BasicButton: React.FC<TProps> = (props): JSX.Element => {
    const { text, onClick, sizeId = 'mobile', customize = {}, typeToken = null } = props;

    const { CWrap, Caption } = genFCElems(BasicButtonElems);
    const theme = getFCTheme({ FCName: 'Button', typeToken, nodeNames: ['cwrap', 'caption'], customize });

    // TODO: add hover effect
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} onClick={onClick}>
            {text && (
                <Caption sizeId={sizeId} theme={theme.caption}>
                    {text}
                </Caption>
            )}
        </CWrap>
    );
};

export default BasicButton;
