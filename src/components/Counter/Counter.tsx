import React, { useState } from 'react';

import { CounterElems } from '../../constants';
import { TSize } from '../../definitions/IPropTypes';
import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export type TProps = {
    sizeId: TSize;
    countParams: {
        initValue: number;
        measure: number;
        minLimit: number;
        maxLimit: number;
    };
    customize?: any;
    idPrefix?: string;
    idPostfix?: string;
    handleIncrement: (curValue: number) => unknown;
    handleDecrement: (curValue: number) => unknown;
}

export const Counter: React.FC<TProps> = (props): JSX.Element => {
    const {
        sizeId = 'mobile', customize = {},
        countParams: { initValue, measure, minLimit, maxLimit },
        handleIncrement, handleDecrement
    } = props;
    const [value, setValue] = useState<number>(initValue);
    const [isDisabledUpBtn, disableUpBtn] = useState<boolean>(false);
    const [isDisabledDownBtn, disableDownBtn] = useState<boolean>(false);

    const { CWrap, Value, Btn } = genFCElems(CounterElems);
    const theme = getFCTheme({ FCName: 'Counter', nodeNames: ['cwrap', 'btn', 'value'], customize });

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <Btn
                sizeId={sizeId}
                theme={theme.btn}
                className={`isDecrement ${isDisabledDownBtn ? 'isDisabled' : ''}`}
                onClick={() => {
                    if (isDisabledDownBtn) return;
                    if (isDisabledUpBtn) disableUpBtn(false);
                    let curValue = value - measure;
                    curValue = curValue > minLimit ? curValue : minLimit;
                    if (curValue === minLimit) disableDownBtn(true);

                    setValue(curValue);
                    handleDecrement(curValue);
                }}
            />
            <Value sizeId={sizeId} theme={theme.value}>
                {value}
            </Value>
            <Btn
                sizeId={sizeId}
                theme={theme.btn}
                className={`isIncrement ${isDisabledUpBtn ? 'isDisabled' : ''}`}
                onClick={() => {
                    if (isDisabledUpBtn) return;
                    if (isDisabledDownBtn) disableDownBtn(false);
                    let curValue = value + measure;
                    curValue = curValue < maxLimit ? curValue : maxLimit;
                    if (curValue === maxLimit) disableUpBtn(true);
                    setValue(curValue);
                    handleIncrement(curValue);
                }}
            />
        </CWrap>
    );
};

export default Counter;
