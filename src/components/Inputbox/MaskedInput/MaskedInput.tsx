import React, {
    useEffect,
    useRef,
    useState,
} from 'react';

import { TSize } from 'definitions/proptypes';
import IMask from 'imask';
import {
    genFCElems,
    getFCTheme,
} from 'utils';

import { MaskedInputElems } from '../../../constants';

export interface Props {
    sizeId: TSize;
    value: string;
    label?: string;
    notice?: string;
    placeholder: string;
    maskConfig: IMask.AnyMaskedOptions;
    customize?: any;
    disabled?: boolean;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => unknown;
    handleReset?: () => unknown;
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
}

export const MaskedInput: React.FC<Props> = (props): JSX.Element => {
    const { sizeId = 'mobile', value, label, notice, placeholder, disabled, maskConfig, customize, handleOnChange, handleReset, typeToken = null, hlaToken, actionToken } = props;
    const [isActive, setIsActive] = useState(false);

    const [curValue, setCurValue] = useState(value);

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef?.current) {
            IMask(inputRef.current, maskConfig);
        }
    }, []);


    const { CWrap, Label, ControlWrap, InputBox, Placeholder, ResetBtn, Notice } = genFCElems(MaskedInputElems);
    const theme = getFCTheme({
        FCName: 'Checkbox', typeToken,
        nodeNames: ['CWrap', 'Label', 'ControlWrap', 'InputBox', 'Placeholder', 'ResetBtn', 'Notice'], customize
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
        <ControlWrap sizeId={sizeId} theme={theme.InputWrap} className={isActive ? 'isActive' : ''}>
            <InputBox
                ref={inputRef}
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
        </ControlWrap>
        <Notice sizeId={sizeId} theme={theme.Notice}>
            {notice || ''}
        </Notice>
    </CWrap>
);
};

export default MaskedInput;
