import React, { useState } from 'react';

import { InputElems } from '../../../constants';
import { TSize } from '../../../definitions/proptypes';
import {
    genFCElems,
    getFCTheme,
} from '../../../utils';

export type TLabel = {
    text: string;
    params: unknown;
};

export interface Props {
    sizeId: TSize;
    label?: string;
    value?: string;
    placeholder?: string | null;
    disabled?: boolean;
    customize?: any;
    handleReset?: () => any;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => any | null;
}

export const Input: React.FC<Props> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        value,
        label,
        placeholder = '',
        disabled = false,
        customize = {},
        handleReset,
        handleOnChange,
    } = props;

    const [isActive, setIsActive] = useState(false);

    const [curValue, setCurValue] = useState(value);

    const { CWrap, Label, InputWrap, InputBox, Placeholder, ResetBtn, Notice } = genFCElems(InputElems);
    const theme = getFCTheme({
            FCName: 'Checkbox', nodeNames: ['CWrap', 'Label', 'InputWrap', 'InputBox', 'Placeholder', 'ResetBtn', 'Notice'], customize
        });

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap}>
            {label ? (
                <Label sizeId={sizeId} theme={theme.Label}>
                    {label}
                </Label>
            ) : (
                <></>
            )}
            <InputWrap sizeId={sizeId} theme={theme.InputWrap} className={isActive ? 'isActive' : ''}>
                <InputBox
                    sizeId={sizeId}
                    theme={theme.InputBox}
                    className={isActive ? 'isActive' : ''}
                    Value={curValue}
                    disabled={disabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (handleOnChange) handleOnChange(event);
                        setCurValue(event.target.value);
                    }}
                    onFocus={() => {
                        setIsActive(true);
                    }}
                    onBlur={() => {
                        setIsActive(false);
                    }}
                />
                {!!value ? (
                    <ResetBtn
                        sizeId={sizeId}
                        theme={theme.InputBox}
                        onClick={() => {
                            handleReset && handleReset();
                            setCurValue('');
                        }}
                    />
                ) : (
                    !!placeholder && (
                        <Placeholder sizeId={sizeId} theme={theme.Placeholder}>
                            {placeholder}
                        </Placeholder>
                    )
                )}
            </InputWrap>
            <Notice sizeId={sizeId} theme={theme.Notice}>
                {}
            </Notice>
        </CWrap>
    );
};

export default Input;
