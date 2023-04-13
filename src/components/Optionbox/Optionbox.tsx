import React, { useState } from 'react';

import { TSize } from 'definitions/proptypes';

import { OptionboxElems } from '../../constants';
import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export interface Props {
    id: string;
    hlaToken?: string;
    actionToken?: string;
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

    /** The initial Value of checked. */
    defaultChecked?: boolean;

    /** Whether or not checkbox is indeterminate. */
    indeterminate?: boolean;

    /** Attributes applied to the input element. */
    inputProps?: React.HTMLAttributes<HTMLInputElement>;

    /** Pass a ref to the input element. */
    inputRef?: React.Ref<any>;

    /** The HTML input Value. */
    Value: boolean;

    /** A checkbox can receive focus. */
    tabIndex?: number;

    /** Whether to show checkbox */
    checkable?: boolean;

    /** Used for the name of the form */
    name?: string;

    /** Called when the user attempts to change the checked state. */
    handleOnChange?: (
        // Value: V | undefined,
        // checked: boolean,
        event: Event
    ) => void;

    /** Called when the checkbox or Label is clicked. */
    handleOnClick?: (evt?: Event) => unknown;
}

/**
 * renders CheckboxButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Optionbox: React.FC<Props> = (props): JSX.Element => {
    const { id, text, Value, handleOnClick, handleOnChange, sizeId = 'mobile', customize = {}, typeToken = null } = props;
    const [isActive, setIsActive] = useState(Value);

    const { CWrap, RadioBtn, RadioIcon, Label } = genFCElems(OptionboxElems);
    const theme = getFCTheme({
        FCName: 'Optionbox', typeToken,
        nodeNames: ['CWrap', 'radioBtn', 'radioicon', 'Label'], customize
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} onClick={(evt: Event) => {
            setIsActive(!isActive);
            handleOnClick && handleOnClick(evt);
        }}>
            <RadioBtn
                id={id} type={'radio'} checked={isActive} hidden 
                sizeId={sizeId} theme={theme.radioBtn}
                onChange={(evt: Event) => {
                    handleOnChange && handleOnChange(evt);
                }}
            />
            <RadioIcon className={isActive ? 'isActive' : ''} sizeId={sizeId} theme={theme.radioicon} />
            {text && (<Label for={id} sizeId={sizeId} theme={theme.Label}>{text}</Label>)}
            <input type={'radio'} checked={Value} hidden={true} />
        </CWrap>
    );
};

export default Optionbox;
