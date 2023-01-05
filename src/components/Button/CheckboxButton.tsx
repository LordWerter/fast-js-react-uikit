import React, { MouseEventHandler } from 'react';
import { useTheme } from '@emotion/react';
import { genComponentElement } from '../../utils';

export type ValueType = string | number;

export type TProps<V = ValueType> = {
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
    value?: V;

    /** A checkbox can receive focus. */
    tabIndex?: number;

    /** Whether to show checkbox */
    checkable?: boolean;

    /** Used for the name of the form */
    name?: string;

    /** Called when the user attempts to change the checked state. */
    onChange?: (
        value: V | undefined,
        checked: boolean,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;

    /** Called when the checkbox or label is clicked. */
    onLabelClick?: MouseEventHandler<HTMLElement>;

    /** Called when the checkbox is clicked. */
    onCheckboxClick?: MouseEventHandler<HTMLElement>;
};

/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';
import { TSize } from '../../definitions/IPropTypes';

/**
 * renders CheckboxButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const CheckboxButton: React.FC<TProps> = (props): JSX.Element => {
    const { text, onLabelClick, sizeId = 'mobile', customize = {}, typeToken = null } = props;

    const CWrap = genComponentElement('button');
    const Caption = genComponentElement('span');

    // @ts-ignore
    const componentStylesObj = { ...useTheme().components.Button };
    const targetTheme = typeToken ? { ...componentStylesObj[typeToken] } : { ...componentStylesObj };
    const requiredNodeNames = ['cwrap', 'caption'];
    const theme: any = {};

    requiredNodeNames.forEach((curKey: string) => {
        theme[curKey] = mergeThemeObjects(targetTheme[curKey], customize[curKey]);
    });

    // TODO: add hover effect
    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {text && (
                <Caption sizeId={sizeId} theme={theme.caption} onClick={onLabelClick}>
                    {text}
                </Caption>
            )}
        </CWrap>
    );
};

export default CheckboxButton;
