import React, {
    MouseEventHandler,
    useState,
} from 'react';

import { SwitcherElems } from '../../constants';
import { TSize } from '../../definitions/IPropTypes';
import {
    genFCElems,
    getFCTheme,
} from '../../utils';

export type SwitcherEvent<T> = (event: T, data?: { name?: string; value: boolean }) => void;
export interface IProps {
    sizeId?: TSize;
    langs?: {
        leftLabel?: string;
        rightLabel?: string;
    }
    customize?: any;
    isEnabled?: boolean;
    isDisabled?: boolean;
    onClick: MouseEventHandler<HTMLElement>;
}

export const Switcher: React.FC<IProps> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        customize = {},
        isEnabled = false,
        isDisabled = false,
        onClick,
        langs = {
            leftLabel: '',
            rightLabel: '',
        }
    } = props;

    const [isEnable, setIsEnable] = useState(isEnabled);

    const { CWrap, Track, Roller, Input, LeftLabel, RightLabel } = genFCElems(SwitcherElems);
    const theme = getFCTheme({ FCName: 'Switcher', nodeNames: ['cwrap', 'leftlabel', 'track', 'roller', 'rightlabel'], customize });


    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.cwrap}
            className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}
            onClick={(event: React.MouseEvent<HTMLInputElement>): void => {
                setIsEnable(!isEnable);
                onClick(event);
            }}>
                {!!langs?.leftLabel && (<LeftLabel sizeId={sizeId} theme={theme.leftlabel} className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}>{langs.leftLabel}</LeftLabel>)}
                <Track
                    sizeId={sizeId} theme={theme.track} className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                        onClick(event);
                    }}>
                    <Roller sizeId={sizeId} theme={theme.roller} className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`} />
                </Track>
                {!!langs?.rightLabel && (<RightLabel sizeId={sizeId} theme={theme.rightlabel} className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}>{langs.rightLabel}</RightLabel>)}
                <Input type={'checkbox'} checked={isEnable} hidden={true} />
        </CWrap>
    );
};

export default Switcher;
