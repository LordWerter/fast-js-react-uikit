import { BasicButtonElems } from 'enums';
import React from 'react';

/**
 * imports of utils
 */
import { genFCElems, getElemNodeCST, getFCTheme } from 'utils';

export interface Props {
    caption?: string;
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
    const {
        caption,
        customize = {},
        handleOnClick,
        typeToken = null,
        hlaToken,
        actionToken,
    } = props;

    const { CWrap, Caption } = genFCElems(Object.keys(BasicButtonElems));
    const theme = getFCTheme({
        FCName: 'Button',
        typeToken,
        nodeNames: ['CWrap', 'Caption'],
        customize,
    });

    const testIds = {
        CWrap: getElemNodeCST(`BASIC_BTN__CWRAP`, hlaToken, actionToken),
        Caption: getElemNodeCST(`BASIC_BTN__CAPTION`, hlaToken, actionToken),
    };

    return (
        <CWrap
            theme={theme.CWrap}
            data-testid={testIds.CWrap}
            onClick={handleOnClick}>
            {!!caption && (
                <Caption theme={theme.Caption} data-testid={testIds.Caption}>
                    {caption}
                </Caption>
            )}
        </CWrap>
    );
};

export default BasicBtn;
