import React from 'react';

/**
 * imports of utils
 */
import { BadgeElemNames } from 'enums';
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
 * renders Badge
 * @param {Object} props implements Props
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Badge: React.FC<Props> = (props): JSX.Element => {
    const {
        caption,
        customize = {},
        handleOnClick,
        typeToken = null,
        hlaToken,
        actionToken,
    } = props;

    const { CWrap, Caption } = genFCElems(Object.keys(BadgeElemNames));
    const theme = getFCTheme({
        FCName: 'Badge',
        typeToken,
        nodeNames: ['CWrap', 'Caption'],
        customize,
    });

    const curFCId = 'BADGE';
    const testIds = {
        CWrap: getElemNodeCST(`${curFCId}__CWRAP`, hlaToken, actionToken),
        Caption: getElemNodeCST(`${curFCId}__CAPTION`, hlaToken, actionToken),
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

export default Badge;
