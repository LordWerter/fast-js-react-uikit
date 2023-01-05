import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { genComponentElement } from '../../utils';

export type TDropdownItem = {
    text: string;
    typeToken: string;
    onClick: (event?: MouseEvent) => unknown;
};

export type TProps = {
    text: string;
    sizeId?: TSize;
    customize?: any;
    typeToken?: string | null;
    onClick?: (event?: MouseEvent) => unknown;
    dropdownItems: TDropdownItem[];
}
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';
import { TSize } from '../../definitions/IPropTypes';

import BasicButton from './BasicButton';

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const BtnWithDropdown: React.FC<TProps> = (props): JSX.Element => {
    const { text, dropdownItems, sizeId = 'mobile', customize = {}, typeToken = null } = props;

    const [dropdownDisplay, setDropdownDisplay] = useState('none')

    const CWrap = genComponentElement('button');
    const DropdownWrap = genComponentElement('div');
    DropdownWrap.style.flexDirection = 'column';
    DropdownWrap.style.position = 'absolute';
    DropdownWrap.style.top = '100%';
    DropdownWrap.style.left = 0;
    DropdownWrap.style.right = 0;

    // @ts-ignore
    const componentStylesObj = { ...useTheme().components.BtnWithDropdown };
    const targetTheme = typeToken ? { ...componentStylesObj[typeToken] } : { ...componentStylesObj };
    const requiredNodeNames = ['cwrap', 'dropdownwrap'];
    const theme: any = {};

    const toggleDropdown = () => {
        const newDropdownDisplayValue = dropdownDisplay === 'none' ? 'flex' : 'none';
        DropdownWrap.style.display = newDropdownDisplayValue;
        setDropdownDisplay(newDropdownDisplayValue);
    };

    requiredNodeNames.forEach((curKey: string) => {
        theme[curKey] = mergeThemeObjects(targetTheme[curKey], customize[curKey]);
    });

    return (<CWrap sizeId={sizeId} theme={theme.cwrap} >
        <BasicButton text={text} onClick={toggleDropdown} />
        <DropdownWrap sizeId={sizeId} theme={theme.dropdownwrap} >
            {dropdownItems.forEach((item: TDropdownItem) => {
                const {text, typeToken, onClick} = item;
                return <BasicButton text={text} typeToken={typeToken} onClick={onClick} />
            })}
        </DropdownWrap>
    </CWrap>);
};

export default BtnWithDropdown;
