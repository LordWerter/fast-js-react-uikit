import React, { useState } from 'react';

import { CheckboxElems } from '../../constants';
import { TSize } from '../../definitions/proptypes';
/**
 * imports of utils
 */
import { genFCElems, getElemNodeCST, getFCTheme } from '../../utils';

export type ValueType = string | number;

export interface Props<V = ValueType> {
    id: string;
    sizeId: TSize;
    customize?: any;

    /** Label text */
    label?: string;
    notice?: string;

    /** Inline layout */
    inline?: boolean;

    /** A checkbox can appear disabled and be unable to change states */
    isDisabled?: boolean;

    /** Make the control readonly */
    readOnly?: boolean;

    /** Render the control as plain text */
    plaintext?: boolean;

    /** Whether or not checkbox is checked. */
    isChecked?: boolean;

    /** Whether or not checkbox is indeterminate. */
    indeterminate?: boolean;

    /** Attributes applied to the input element. */
    inputProps?: React.HTMLAttributes<HTMLInputElement>;

    /** Pass a ref to the input element. */
    inputRef?: React.Ref<any>;

    /** The HTML input Value. */
    value?: V;

    /** A checkbox can receive focus. */
    tabIndex?: number;

    /** Whether to show checkbox */
    checkable?: boolean;

    /** Used for the name of the form */
    name?: string;

    /** Called when the user attempts to change the checked state. */
    handleOnChange?: React.MouseEventHandler<HTMLButtonElement>;

    /** Called when the checkbox or Label is clicked. */
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    withCoverBtn?: boolean;
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
}

/**
 * renders Checkbox Instance
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Checkbox: React.FC<Props> = (props): JSX.Element => {
    const {
        id,
        sizeId = 'mobile',
        isChecked = false,
        isDisabled,
        label,
        notice,
        handleOnClick,
        handleOnChange,
        customize = {},
        typeToken = null,
        hlaToken,
        actionToken,
        withCoverBtn,
    } = props;
    const [isCheckedNow, setIsCheckedNow] = useState<boolean>(isChecked);

    const {
        CWrap,
        CoverBtn,
        CheckIcon,
        Label,
        HiddenInput,
        ControlWrap,
        Notice,
    } = genFCElems(CheckboxElems);
    const theme = getFCTheme({
        FCName: 'Checkbox',
        typeToken,
        nodeNames: ['CWrap', 'CheckBtn', 'CheckIcon', 'Label'],
        customize,
    });

    const testIds = {
        CWrap: getElemNodeCST(`CHECKBOX__CWRAP`, hlaToken, actionToken),
        CoverBtn: getElemNodeCST(`CHECKBOX__COVER_BTN`, hlaToken, actionToken),
        ControlWrap: getElemNodeCST(
            `CHECKBOX__CONTROL_WRAP`,
            hlaToken,
            actionToken
        ),
        CheckIcon: getElemNodeCST(
            `CHECKBOX__CHECK_ICON`,
            hlaToken,
            actionToken
        ),
        Label: getElemNodeCST(`CHECKBOX__LABEL`, hlaToken, actionToken),
        Notice: getElemNodeCST(`CHECKBOX__NOTICE`, hlaToken, actionToken),
    };

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} data-testid={testIds.CWrap}>
            <HiddenInput
                type={'checkbox'}
                checked={isCheckedNow}
                disabled={isDisabled}
                hidden={true}
                onChange={(evt: React.MouseEvent<HTMLButtonElement>) => {
                    handleOnChange && handleOnChange(evt);
                }}
            />
            <ControlWrap
                sizeId={sizeId}
                theme={theme.ControlWrap}
                data-testid={testIds.ControlWrap}>
                {withCoverBtn && (
                    <CoverBtn
                        sizeId={sizeId}
                        theme={theme.CoverBtn}
                        data-testid={testIds.CoverBtn}
                        onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                            handleOnChange && handleOnChange(evt);
                            handleOnClick && handleOnClick(evt);
                            setIsCheckedNow(!isChecked);
                        }}
                    />
                )}
                <CheckIcon
                    className={isCheckedNow ? 'isChecked' : ''}
                    sizeId={sizeId}
                    theme={theme.CheckIcon}
                    data-testid={testIds.CheckIcon}
                    onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                        if (!withCoverBtn) {
                            handleOnClick && handleOnClick(evt);
                            setIsCheckedNow(!isChecked);
                        }
                    }}
                />
                {!!label && (
                    <Label
                        htmlFor={id}
                        sizeId={sizeId}
                        theme={theme.Label}
                        data-testid={testIds.Label}>
                        {label}
                    </Label>
                )}
            </ControlWrap>
            <Notice
                sizeId={sizeId}
                theme={theme.Notice}
                data-testid={testIds.Notice}>
                {notice || ''}
            </Notice>
        </CWrap>
    );
};

export default Checkbox;
