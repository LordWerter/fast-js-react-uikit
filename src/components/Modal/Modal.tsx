import React, { ReactNode } from 'react';

import { genFCElems, getFCTheme } from '../../utils';

export interface ICWrapProps {
    padding: string;
    fontColor: string;
    fontSize: string;
    fontWeight: string;
    borderRadius: string;
    bgColor?: string;
    onClick: (event: any) => void;
}

export type EventHandler = (event?: Event) => void;

export interface Props {
    text: string;
    sizeId: string;
    customize?: any;
    showWindow: any;
    children?: ReactNode;
    handleOnClose?: (event?: Event) => void;
}

/**
 * renders Modal
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Modal: React.FC<Props> = (props): JSX.Element => {
    const { sizeId, customize = {}, children } = props;

    const requiredThemeKeys = ['CWrap', 'modalwrap', 'closeBtn'];

    const { CWrap, ModalWrap, CloseBtn } = genFCElems([
        { name: 'CWrap', tag: 'div' },
        { name: 'ModalWrap', tag: 'div' },
        { name: 'CloseBtn', tag: 'div' },
    ]);
    const theme = getFCTheme({
        FCName: 'Modal',
        nodeNames: [...requiredThemeKeys],
        customize,
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap}>
            <ModalWrap sizeId={sizeId} theme={theme.modalwrap} role='dialog'>
                {children}
                <CloseBtn sizeId={sizeId} theme={theme.closeBtn} />
            </ModalWrap>
        </CWrap>
    );
};

export default Modal;
