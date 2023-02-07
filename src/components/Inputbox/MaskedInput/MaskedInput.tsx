import React, {
    ChangeEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

import IMask from 'imask';

import { MaskedInputElems } from '../../../constants';
import { TSize } from '../../../definitions/IPropTypes';
import {
    genFCElems,
    getFCTheme,
} from '../../../utils';

export type TProps = {
    sizeId: TSize;
    value: string;
    label?: string;
    placeholder: string;
    maskConfig: any;
    customize?: any;
    disabled?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => unknown;
}

export const MaskedInput: React.FC<TProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', value = '', label, placeholder, disabled, maskConfig, customize, onChange } = props;
    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef?.current) {
            IMask(inputRef.current, maskConfig);
        }
    }, []);


    const { CWrap, Label, InputWrap, InputBox, Placeholder, Notice } = genFCElems(MaskedInputElems);
    const theme = getFCTheme({
        FCName: 'MaskedInput', nodeNames: ['cwrap', 'label', 'inputwrap', 'inputbox', 'placeholder', 'notice'], customize
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            {label && (
                <Label sizeId={sizeId} theme={theme.label}>
                    {label}
                </Label>
            )}
            <InputWrap sizeId={sizeId} theme={theme.inputwrap} className={isActive ? 'isActive' : ''}>
                <InputBox
                    ref={inputRef}
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

export default MaskedInput;
