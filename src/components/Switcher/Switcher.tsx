import React, { MouseEventHandler, useState } from 'react';

import { Switcher as nodeList } from 'constants';
import { TSize } from 'definitions';

import { genFCElems, getFCTheme } from '../../utils';

export type SwitcherEvent<T> = (
    event: T,
    data?: { name?: string; Value: boolean }
) => void;
export interface Props {
    sizeId: TSize;
    langs?: {
        leftLabel?: string;
        rightLabel?: string;
    };
    customize?: any;
    isEnabled: boolean;
    isDisabled?: boolean;
    handleOnClick: MouseEventHandler<HTMLElement>;
}

export const Switcher: React.FC<Props> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        customize = {},
        isEnabled = false,
        isDisabled = false,
        handleOnClick,
        langs = {
            leftLabel: '',
            rightLabel: '',
        },
    } = props;

    const [isEnable, setIsEnable] = useState(isEnabled);

    const { CWrap, Track, Roller, Input, LeftLabel, RightLabel } =
        genFCElems(nodeList);
    const theme = getFCTheme({
        FCName: 'Switcher',
        nodeNames: ['CWrap', 'leftLabel', 'track', 'roller', 'rightLabel'],
        customize,
    });

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.CWrap}
            className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}
            onClick={(event: React.MouseEvent<HTMLInputElement>): void => {
                setIsEnable(!isEnable);
                handleOnClick(event);
            }}>
            {!!langs?.leftLabel && (
                <LeftLabel
                    sizeId={sizeId}
                    theme={theme.leftLabel}
                    className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}>
                    {langs.leftLabel}
                </LeftLabel>
            )}
            <Track
                sizeId={sizeId}
                theme={theme.track}
                className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    handleOnClick(event);
                }}>
                <Roller
                    sizeId={sizeId}
                    theme={theme.roller}
                    className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}
                />
            </Track>
            {!!langs?.rightLabel && (
                <RightLabel
                    sizeId={sizeId}
                    theme={theme.rightLabel}
                    className={`${isEnable ? 'isOn' : 'isOff'}${isDisabled ? ' isDisabled' : ''}`}>
                    {langs.rightLabel}
                </RightLabel>
            )}
            <Input type={'checkbox'} checked={isEnable} hidden={true} />
        </CWrap>
    );
};

export default Switcher;
