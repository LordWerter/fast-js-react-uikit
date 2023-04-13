import React from 'react';

import { SwitchBtnElems } from '../../constants';
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
    handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
}

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const SwitchBtn: React.FC<Props> = (props): JSX.Element => {
    const { caption, sizeId = 'mobile', customize = {}, handleOnClick, typeToken = null, hlaToken, actionToken } = props;

    const { CWrap, Caption } = genFCElems(SwitchBtnElems);
    const theme = getFCTheme({
        FCName: 'SwitchBtn', typeToken, 
        nodeNames: ['CWrap', 'Caption'], customize
    });

    const testIds = {
        CWrap: getElemNodeCST(`SWITCH_BTN__CWRAP`, hlaToken, actionToken),
        Caption: getElemNodeCST(`SWITCH_BTN__CAPTION`, hlaToken, actionToken),
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

export default SwitchBtn;
