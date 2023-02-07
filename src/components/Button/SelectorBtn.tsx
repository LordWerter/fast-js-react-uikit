import React, {
    useMemo,
    useState,
} from 'react';

import { SelectorBtnElems } from '../../constants';
import { TSize } from '../../definitions/IPropTypes';
import {
    genFCElems,
    getFCTheme,
} from '../../utils';
import BasicButton from './BasicBtn';

export type TOption = {
    caption: string;
    onClick: (evt: Event) => unknown;
};

export type TProps = {
    sizeId: TSize;
    initCaption: string;
    options: TOption[];
    customize?: any;
    typeToken?: string | null;
    idPrefix?: string;
    idPostfix?: string;
};

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const SelectorBtn: React.FC<TProps> = (props): JSX.Element => {
    const { initCaption, options, sizeId = 'mobile', customize = {}, typeToken = null } = props;
    const [showOptions, setShowOptions] = useState(false);

    const { CWrap, CurOption, ToggleBtn, OptionsWrap } = useMemo(() => genFCElems(SelectorBtnElems), []);
    const theme = getFCTheme({
            FCName: 'SelectorBtn', typeToken, 
            nodeNames: ['cwrap', 'curoption', 'togglebtn', 'optionswrap', 'optionbtn'], customize
        });

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} onClick={() => {
            return null;
        }}>
            <CurOption sizeId={sizeId} theme={theme.curoption}>
                {initCaption}
            </CurOption>
            <ToggleBtn theme={theme.togglebtn} onClick={() => {
                setShowOptions(!showOptions);
            }} />
            <OptionsWrap className={showOptions ? 'isVisible' : ''} sizeId={sizeId} theme={theme.optionswrap}>
                {options.map((option: TOption, index: number) => {
                    const { caption, onClick } = option;
                    return (
                        <BasicButton
                            key={index}
                            sizeId={sizeId} customize={theme.optionbtn} onClick={(evt: Event) => {
                                setShowOptions(false);
                                onClick(evt);
                            }} text={caption}
                        />
                    );
            })}
            </OptionsWrap>
        </CWrap>
    );
};

export default SelectorBtn;
