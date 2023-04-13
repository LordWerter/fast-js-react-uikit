import React from 'react';

/**
 * imports of utils
 */
import { BasicButtonElems } from '../../constants';
import { TSize } from '../../definitions/proptypes';
import {
    genFCElems,
    getElemNodeCST,
    getFCTheme,
} from '../../utils';

export interface Props {
    caption?: string;
    sizeId?: TSize;
    customize?: any;
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
}

/**
 * renders BasicBtn
 * @param {Object} props implements Props
 * @type {Function}
 * @returns {JSX.Element}
 */
export const BasicBtn: React.FC<Props> = (props): JSX.Element => {
    const { caption, sizeId = 'mobile', customize = {}, handleOnClick, typeToken = null, hlaToken, actionToken } = props;

    const { CWrap, Caption } = genFCElems(BasicButtonElems);
    const theme = getFCTheme({ FCName: 'Button', typeToken, nodeNames: ['CWrap', 'Caption'], customize });

    const testIds = {
        CWrap: getElemNodeCST(`BASIC_BTN__CWRAP`, hlaToken, actionToken),
        Caption: getElemNodeCST(`BASIC_BTN__CAPTION`, hlaToken, actionToken),
    };

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} data-testid={testIds.CWrap} onClick={handleOnClick}>
            {!!caption && (
                <Caption sizeId={sizeId} theme={theme.Caption} data-testid={testIds.Caption}>
                    {caption}
                </Caption>
            )}
        </CWrap>
    );
};

export default BasicBtn;
