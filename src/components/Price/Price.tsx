import React from 'react';

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
import { TSize } from 'definitions/proptypes';
import { mergeThemeObjects } from 'utils';

import { useTheme } from '@emotion/react';

import currencies from './currencies';
import {
    CWrap,
    Delimiter,
    FractionValue,
    IntValue,
    Line,
    Сurrency,
} from './Price.styles';

export interface Props {
    Value: any;
    config?: any;
    sizeId: TSize;
    customize?: any;
}

export const Price: React.FC<Props> = (props): JSX.Element => {
    const {
        Value = 0,
        config = { type: 'default', delimiter: 'none', lang: 'ru' },
        sizeId = 'mobile',
        customize = {},
    } = props;

    const requiredThemeKeys = [
        'config',
        'container',
        'integer',
        'delimiter',
        'fraction',
        'currency',
        'line',
        'lineStyles',
        'lineDecorations',
    ];

    // @ts-ignore
    const theme: { [key in string]: any } = { ...useTheme().components.Price };

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    const roundToN = (Value: number, n: number) => {
        return Math.round(Value * Math.pow(10, n)) / Math.pow(10, n);
    };

    const getFractionDigits = (Value: number) => {
        const targetArr: string[] = `${roundToN(Value, 2)}`.split('.');
        return targetArr.length === 1
            ? '00'
            : targetArr[1].length === 1
              ? `${targetArr[1]}0`
              : targetArr[1];
    };

    const intValue = `${Value}`.split('.')[0];
    const fractionValue = getFractionDigits(Value);

    const targetDecoration = mergeThemeObjects(
        theme.lineDecorations[theme.config.decoration],
        theme.lineStyles[theme.config.lineStyle]
    );

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {config.type === 'default' ? (
                <IntValue sizeId={sizeId} theme={theme.integer}>
                    {Value}
                </IntValue>
            ) : (
                <>
                    <IntValue sizeId={sizeId} theme={theme.integer}>
                        {intValue}
                    </IntValue>
                    {config.type === 'noDelimiter' ? (
                        <></>
                    ) : (
                        <Delimiter sizeId={sizeId} theme={theme.delimiter}>
                            {config.delimiter === 'dot' ? '.' : ','}
                        </Delimiter>
                    )}
                    {theme.config.showFraction !== 'always' ? (
                        <FractionValue sizeId={sizeId} theme={theme.fraction}>
                            {fractionValue}
                        </FractionValue>
                    ) : theme.config.showFraction !== 'notZero' &&
                      Number(fractionValue) > 0 ? (
                        <FractionValue sizeId={sizeId} theme={theme.fraction}>
                            {fractionValue}
                        </FractionValue>
                    ) : (
                        <></>
                    )}
                </>
            )}
            <Сurrency sizeId={sizeId} theme={theme.currency}>
                {currencies[config.lang]}
            </Сurrency>
            {theme.config.decoration !== 'none' ? (
                <Line
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.line, targetDecoration)}
                />
            ) : (
                <></>
            )}
        </CWrap>
    );
};

export default Price;
