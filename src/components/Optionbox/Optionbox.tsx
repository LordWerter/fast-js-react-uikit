import React, { useState } from 'react';

import { Optionbox as nodeList } from 'constants';
import { TSize } from 'definitions';

import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export type ValueType = string | number;

export type TProps = {
    id: string;
    idPrefix?: string;
    idPostfix?: string;
    sizeId?: TSize;
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
    value: boolean;

    /** A checkbox can receive focus. */
    tabIndex?: number;

    /** Whether to show checkbox */
    checkable?: boolean;

    /** Used for the name of the form */
    name?: string;

    /** Called when the user attempts to change the checked state. */
    handleOnChange?: (
        // value: V | undefined,
        // checked: boolean,
        event: Event
    ) => void;

    /** Called when the checkbox or label is clicked. */
    handleOnClick?: (evt?: Event) => unknown;
};

/**
 * renders CheckboxButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Optionbox: React.FC<TProps> = (props): JSX.Element => {
    const { id, text, value, handleOnClick, handleOnChange, sizeId = 'mobile', customize = {}, typeToken = null } = props;
    const [isActive, setIsActive] = useState(value);

    const { CWrap, RadioBtn, RadioIcon, Label } = genFCElems(nodeList);
    const theme = getFCTheme({
        FCName: 'Optionbox', typeToken,
        nodeNames: ['cwrap', 'radiobtn', 'radioicon', 'label'], customize
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} onClick={(evt: Event) => {
            setIsActive(!isActive);
            handleOnClick && handleOnClick(evt);
        }}>
            <RadioBtn
                id={id} type={'radio'} checked={isActive} hidden 
                sizeId={sizeId} theme={theme.radiobtn}
                onChange={(evt: Event) => {
                    handleOnChange && handleOnChange(evt);
                }}
            />
            <RadioIcon className={isActive ? 'isActive' : ''} sizeId={sizeId} theme={theme.radioicon} />
            {text && (<Label for={id} sizeId={sizeId} theme={theme.label}>{text}</Label>)}
            <input type={'radio'} checked={value} hidden={true} />
        </CWrap>
    );
};

export default Optionbox;
