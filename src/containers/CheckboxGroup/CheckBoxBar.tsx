import React, { CSSProperties } from 'react';

import { useTheme } from '@emotion/react';

import { Checkbox } from '../../components';
import { TSize } from '../../definitions/proptypes';
import { mergeThemeObjects } from '../../utils';
import { CWrap } from './CheckBoxBar.styles';

export interface CheckBox {
    key: string;
    hash: string;
    label?: string;
    customize?: CSSProperties;
    handleOnChange?: React.MouseEventHandler;
    isChecked?: boolean;
}

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    data?: any[];
}

const CheckBoxBar: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, data } = props;

    // @ts-ignore
    const theme = { ...useTheme().containers.CheckBoxBar };

    return (
        <CWrap
            sizeId={sizeId}
            theme={mergeThemeObjects(theme.container, customize.container)}>
            {data &&
                data.map((item: any): JSX.Element => {
                    const {
                        key,
                        hash,
                        label,
                        handleOnChange,
                        notice,
                        isChecked,
                    } = item;
                    return (
                        <Checkbox
                            key={key}
                            sizeId={sizeId}
                            hash={hash}
                            label={label}
                            customize={theme.Checkbox}
                            handleOnChange={handleOnChange}
                            notice={notice}
                            isChecked={isChecked}
                        />
                    );
                })}
        </CWrap>
    );
};

export default CheckBoxBar;
