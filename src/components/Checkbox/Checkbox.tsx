import React from 'react';

import { CheckboxElems } from '../../constants';
import { TSize } from '../../definitions/IPropTypes';
/**
 * imports of utils
 */
import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export type ValueType = string | number;

export type TProps<V = ValueType> = {
    id: string;
    sizeId: TSize;
    isChecked: boolean;
    idPrefix?: string;
    idPostfix?: string;
    customize?: any;
    typeToken?: string | null;

    /** Label text */
    text?: string;

    /** Inline layout */
    inline?: boolean;

    /** A checkbox can appear disabled and be unable to change states */
    disabled?: boolean;

    /** Make the control readonly */
    readOnly?: boolean;

    /** Render the control as plain text */
    plaintext?: boolean;

    /** Whether or not checkbox is checked. */
    checked?: boolean;

    /** The initial value of checked. */
    defaultChecked?: boolean;

    /** Whether or not checkbox is indeterminate. */
    indeterminate?: boolean;

    /** Attributes applied to the input element. */
    inputProps?: React.HTMLAttributes<HTMLInputElement>;

    /** Pass a ref to the input element. */
    inputRef?: React.Ref<any>;

    /** The HTML input value. */
    value?: V;

    /** A checkbox can receive focus. */
    tabIndex?: number;

    /** Whether to show checkbox */
    checkable?: boolean;

    /** Used for the name of the form */
    name?: string;

    /** Called when the user attempts to change the checked state. */
    onChange?: (
        // value: V | undefined,
        // checked: boolean,
        event: Event
    ) => void;

    /** Called when the checkbox or label is clicked. */
    onClick?: (evt?: Event) => unknown;
};

/**
 * renders Checkbox Instance
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Checkbox: React.FC<TProps> = (props): JSX.Element => {
    const { id, sizeId = 'mobile', isChecked, text, onClick, onChange, customize = {}, typeToken = null } = props;

    const { CWrap, CheckBtn, CheckIcon, Label } = genFCElems(CheckboxElems);
    const theme = getFCTheme({
            FCName: 'Checkbox', typeToken, 
            nodeNames: ['cwrap', 'checkbtn', 'checkicon', 'label'], customize
        });

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} onClick={(evt: Event) => {
            if (onClick) onClick(evt);
        }}>
            <CheckBtn
                id={id} type={'checkbox'} checked={isChecked} hidden 
                sizeId={sizeId} theme={theme.checkbtn}
                onChange={(evt: Event) => {
                    if (onChange) onChange(evt);
                }}
            />
            <CheckIcon className={isChecked ? 'isChecked' : ''} sizeId={sizeId} theme={theme.checkicon} />
            {text && (<Label htmlFor={id} sizeId={sizeId} theme={theme.label}>{text}</Label>)}
        </CWrap>
    );
};

export default Checkbox;
