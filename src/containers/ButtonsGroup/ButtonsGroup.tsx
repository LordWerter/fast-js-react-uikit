import React, { CSSProperties } from 'react';

import { BasicBtn } from 'components';

import { ButtonsGroupElems } from '../../constants';
import { TSize } from '../../definitions/proptypes';
import { genFCElems, getFCTheme } from '../../utils';

export interface BtnDescriptor {
    name?: string;
    type?: string;
    force?: string;
    styles?: CSSProperties;
    onClick?: () => any;
}

export interface Props {
    sizeId?: TSize;
    customize?: any;
    data: BtnDescriptor[];
    typeToken?: string;
}

const ButtonsGroup: React.FC<Props> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, data, typeToken = '' } = props;
    const { CWrap } = genFCElems(ButtonsGroupElems);
    const theme = getFCTheme({
        FCName: 'ButtonsGroup',
        typeToken,
        nodeNames: ['CWrap'],
        customize,
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {data &&
                data.map((item: any, index: number): JSX.Element => {
                    const { name, onClick } = item;

                    return (
                        <BasicBtn
                            key={index}
                            customize={theme.button}
                            text={name}
                            sizeId={sizeId}
                            onClick={onClick}
                        />
                    );
                })}
        </CWrap>
    );
};

export default ButtonsGroup;
