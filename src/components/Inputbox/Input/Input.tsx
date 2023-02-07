import React, {
    ChangeEvent,
    useState,
} from 'react';

import { InputElems } from '../../../constants';
import { TSize } from '../../../definitions/IPropTypes';
import {
    genFCElems,
    getFCTheme,
} from '../../../utils';

export type TLabel = {
    text: string;
    params: unknown;
};

export type TProps = {
    sizeId: TSize;
    label?: any;
    value?: string;
    placeholder?: string | null;
    disabled?: boolean;
    customize?: any;
    handleReset?: () => any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => any | null;
}

export const Input: React.FC<TProps> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        value = '',
        label = null,
        placeholder = null,
        disabled = false,
        customize = {},
        onChange = null,
    } = props;

    const [isActive, setIsActive] = useState(false);

    const { CWrap, Label, InputWrap, InputBox, Placeholder, Notice } = genFCElems(InputElems);
    const theme = getFCTheme({
            FCName: 'Checkbox', nodeNames: ['cwrap', 'label', 'inputwrap', 'input', 'placeholder', 'notice'], customize
        });

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            {label ? (
                <Label sizeId={sizeId} theme={theme.label}>
                    {label.text}
                </Label>
            ) : (
                <></>
            )}
            <InputWrap sizeId={sizeId} theme={theme.inputwrap} className={isActive ? 'isActive' : ''}>
                <InputBox
                    sizeId={sizeId}
                    theme={theme.input}
                    className={isActive ? 'isActive' : ''}
                    value={value}
                    disabled={disabled}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        if (onChange) onChange(event);
                    }}
                    onFocus={() => {
                        setIsActive(true);
                    }}
                    onBlur={() => {
                        setIsActive(false);
                    }}
                />
                {!value && (
                    <Placeholder sizeId={sizeId} theme={theme.placeholder}>
                        {placeholder}
                    </Placeholder>
                )}
            </InputWrap>
            <Notice sizeId={sizeId} theme={theme.notice}>
                {}
            </Notice>
        </CWrap>
    );
};

export default Input;
