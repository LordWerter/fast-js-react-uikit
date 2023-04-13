import React from 'react';

/**
 * imports of utils
 */
import { BasicButtonElems } from '../../constants';
import { TSize } from '../../definitions/proptypes';
import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export interface Props {
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
export const Dropzone: React.FC<Props> = (props): JSX.Element => {
    const { text, onClick, sizeId = 'mobile', customize = {}, typeToken = null } = props;

    const { CWrap, Caption } = genFCElems(BasicButtonElems);
    const theme = getFCTheme({ FCName: 'Button', typeToken, nodeNames: ['CWrap', 'Caption'], customize });

    // TODO: add hover effect
    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} onClick={onClick}>
            {text && (
                <Caption sizeId={sizeId} theme={theme.Caption}>
                    {text}
                </Caption>
            )}
        </CWrap>
    );
};

export default Dropzone;
