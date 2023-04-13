import React, { useState } from 'react';

import { SelectorBtnElems } from '../../constants';
import { TSize } from '../../definitions/proptypes';
import {
    genFCElems,
    getElemNodeCST,
    getFCTheme,
} from '../../utils';
import { BasicBtn } from './';

export type TOption<T> = {
    key: string;
    caption: string;
    handleOnClick: React.MouseEventHandler<T>;
};

export interface Props {
    sizeId: TSize;
    caption: string;
    options: TOption<HTMLButtonElement>[];
    customize?: any;
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
};

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const SelectorBtn: React.FC<Props> = (props): JSX.Element => {
    const { caption, options, sizeId = 'mobile', customize = {}, typeToken = null, hlaToken, actionToken } = props;
    const [showOptions, setShowOptions] = useState(false);

    const { CWrap, CurOptionWrap, CurOption, ToggleBtn, OptionsWrap } = genFCElems(SelectorBtnElems);
    const theme = getFCTheme({
            FCName: 'SelectorBtn', typeToken, 
            nodeNames: ['CWrap', 'CurOption', 'ToggleBtn', 'OptionsWrap'], customize
        });

    const testIds = {
        CWrap: getElemNodeCST(`SELECTOR_BTN__CWRAP`, hlaToken, actionToken),
        CurOptionWrap: getElemNodeCST(`SELECTOR_BTN__CUR_OPTION_WRAP`, hlaToken, actionToken),
        CurOption: getElemNodeCST(`SELECTOR_BTN__CUR_OPTION`, hlaToken, actionToken),
        ToggleBtn: getElemNodeCST(`SELECTOR_BTN__TOGGLE_BTN`, hlaToken, actionToken),
        OptionsWrap: getElemNodeCST(`SELECTOR_BTN__OPTIONS_WRAP`, hlaToken, actionToken),
    };
    
    
    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} onClick={() => {
            setShowOptions(!showOptions);
        }}>
            <CurOptionWrap sizeId={sizeId} theme={theme.CurOptionWrap} data-testid={testIds.CurOptionWrap}>
                <CurOption sizeId={sizeId} theme={theme.CurOption} data-testid={testIds.CurOption}>
                    {caption}
                </CurOption>
                <ToggleBtn sizeId={sizeId}  theme={theme.ToggleBtn} data-testid={testIds.ToggleBtn} />
            </CurOptionWrap>
            <OptionsWrap className={showOptions ? 'isVisible' : ''} sizeId={sizeId} theme={theme.OptionsWrap} data-testid={testIds.OptionsWrap}>
                {options.map((option: TOption<HTMLButtonElement>) => {
                    const { key, caption, handleOnClick } = option;
                    return (
                        <BasicBtn
                            key={key}
                            sizeId={sizeId} customize={theme.OptionBtn} handleOnClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                                setShowOptions(false);
                                handleOnClick && handleOnClick(evt);
                            }} caption={caption}
                            hlaToken={hlaToken ? `${hlaToken}__SELECTOR_BTN` : 'SELECTOR_BTN'}
                            actionToken={actionToken}
                        />
                    );
            })}
            </OptionsWrap>
        </CWrap>
    );
};

export default SelectorBtn;
