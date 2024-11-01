import React from 'react';

import { LabelElems } from '../../constants';
import { genFCElems, getElemNodeCST, getFCTheme } from '../../utils';

export interface Props {
    text: number | string;
    prefix: string;
    postfix: string;
    sizeId?: any;
    customize?: any;
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
}

export const Label: React.FC<Props> = (props): JSX.Element => {
    const {
        text,
        prefix,
        postfix,
        sizeId = 'mobile',
        customize = {},
        typeToken = null,
        hlaToken,
        actionToken,
    } = props;

    const nodeNameList = ['CWrap', 'Prefix', 'Postfix'];

    const { CWrap, Prefix, Postfix } = genFCElems(LabelElems);
    const theme = getFCTheme({
        FCName: 'Dropbox',
        typeToken,
        nodeNames: [...nodeNameList],
        customize,
    });

    const testIds = {
        CWrap: getElemNodeCST(`SWITCH_BTN__CWRAP`, hlaToken, actionToken),
        Prefix: getElemNodeCST(`SWITCH_BTN__PREFIX`, hlaToken, actionToken),
        Postfix: getElemNodeCST(`SWITCH_BTN__POSTFIX`, hlaToken, actionToken),
    };

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} data-testid={testIds.CWrap}>
            <Prefix
                sizeId={sizeId}
                theme={theme.Prefix}
                data-testid={testIds.Prefix}>
                {prefix}
            </Prefix>
            {text}
            <Postfix
                sizeId={sizeId}
                theme={theme.Postfix}
                data-testid={testIds.Postfix}>
                {postfix}
            </Postfix>
        </CWrap>
    );
};

export default Label;
