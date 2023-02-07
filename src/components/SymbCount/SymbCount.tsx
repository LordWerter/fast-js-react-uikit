import React from 'react';

import { SymbCountElems } from '../../constants';
import { TSize } from '../../definitions/IPropTypes';
import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export type TProps = {
    sizeId: TSize;
    curNum: number;
    maxNum: number;
    customize?: any;
}

export const SymbCount: React.FC<TProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, curNum, maxNum } = props;

    const { CWrap, CurNum, MaxNum } = genFCElems(SymbCountElems);
    const theme = getFCTheme({ FCName: 'SymbCount', nodeNames: ['cwrap', 'curnum', 'maxnum'], customize });

    const persent = Math.ceil((curNum / maxNum) * 100);

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <CurNum
                sizeId={sizeId}
                theme={theme.curnum}
                className={persent >= 100 ? 'isInvalid' : persent >= 80 ? 'isWarning' : ''}
            >{curNum}</CurNum> / <MaxNum
                sizeId={sizeId}
                theme={theme.maxnum}
            >{maxNum}</MaxNum>
        </CWrap>
    );
};

export default SymbCount;
