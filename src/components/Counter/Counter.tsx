import React, { useState } from 'react';

import { CounterElems } from '../../constants';
import { TSize } from '../../definitions/proptypes';
import {
    genFCElems,
    getElemNodeCST,
    getFCTheme,
} from '../../utils';

export interface Props {
    sizeId: TSize;
    customize?: any;
    label?: string;
    notice?: string;
    countParams: {
        initValue: number;
        measure: number;
        minLimit: number;
        maxLimit: number;
    };
    handleIncrement: (curValue: number) => unknown;
    handleDecrement: (curValue: number) => unknown;
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
}

export type DisabledBtn = 'MinusBtn' | 'PlusBtn' | null;

export const Counter: React.FC<Props> = (props): JSX.Element => {
    const {
        sizeId = 'mobile', customize = {},
        label, notice,
        countParams: { initValue, measure, minLimit, maxLimit },
        handleIncrement, handleDecrement,
        typeToken, hlaToken, actionToken
    } = props;
    const [value, setValue] = useState<number>(initValue);
    const [disabledBtn, setDisabledBtn] = useState<DisabledBtn>(null);

    const { CWrap, Label, ControlWrap, Value, Btn, Notice } = genFCElems(CounterElems);
    const theme = getFCTheme({
        FCName: 'Counter', typeToken,
        nodeNames: ['CWrap', 'Label', 'ControlWrap', 'MinusBtn', 'Value', 'PlusBtn', 'Notice'], customize
    });

    const testIds = {
        CWrap: getElemNodeCST(`SWITCH_BTN__CWRAP`, hlaToken, actionToken),
        Label: getElemNodeCST(`SWITCH_BTN__LABEL`, hlaToken, actionToken),
        ControlWrap: getElemNodeCST(`SWITCH_BTN__CONTROL_WRAP`, hlaToken, actionToken),
        MinusBtn: getElemNodeCST(`SWITCH_BTN__MINUS_BTN`, hlaToken, actionToken),
        Value: getElemNodeCST(`SWITCH_BTN__VALUE`, hlaToken, actionToken),
        PlusBtn: getElemNodeCST(`SWITCH_BTN__PLUS_BTN`, hlaToken, actionToken),
        Notice: getElemNodeCST(`SWITCH_BTN__NOTICE`, hlaToken, actionToken),
    };

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} data-testid={testIds.CWrap}>
            {!!label && (<Label sizeId={sizeId} theme={theme.Label} data-testid={testIds.Label}>{label}</Label>)}
            <ControlWrap sizeId={sizeId} theme={theme.ControlWrap} data-testid={testIds.ControlWrap}>
            <Btn
                sizeId={sizeId}
                theme={theme.MinusBtn}
                data-testid={testIds.MinusBtn}
                className={`isDecrement ${disabledBtn === 'MinusBtn' ? 'isDisabled' : ''}`}
                onClick={() => {
                    if (disabledBtn === 'MinusBtn') return;
                    if (disabledBtn === 'PlusBtn') setDisabledBtn(null);
                    let curValue = value - measure;
                    curValue = curValue > minLimit ? curValue : minLimit;
                    if (curValue === minLimit) setDisabledBtn('MinusBtn');

                    setValue(curValue);
                    handleDecrement(curValue);
                }}
            />
            <Value sizeId={sizeId} theme={theme.Value} data-testid={testIds.Value}>
                {value}
            </Value>
            <Btn
                sizeId={sizeId}
                theme={theme.Btn}
                data-testid={testIds.PlusBtn}
                className={`isIncrement ${disabledBtn === 'PlusBtn' ? 'isDisabled' : ''}`}
                onClick={() => {
                    if (disabledBtn === 'PlusBtn') return;
                    if (disabledBtn === 'MinusBtn') setDisabledBtn(null);
                    let curValue = value + measure;
                    curValue = curValue < maxLimit ? curValue : maxLimit;
                    if (curValue === maxLimit) setDisabledBtn('PlusBtn');
                    setValue(curValue);
                    handleIncrement(curValue);
                }}
            />
            </ControlWrap>
            <Notice sizeId={sizeId} theme={theme.Notice} data-testid={testIds.Notice}>{notice || ''}</Notice>
        </CWrap>
    );
};

export default Counter;
