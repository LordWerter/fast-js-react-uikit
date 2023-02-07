import React, { useState } from 'react';

import { useTheme } from '@emotion/react';

import { TSize } from '../../definitions/IPropTypes';
import { mergeThemeObjects } from '../../utils';
import {
    CWrap,
    Item,
    SelectedItem,
} from './Dropbox.styles';

export type TProps = {
    defaultItem: any;
    sizeId?: TSize;
    customize?: any;
    data?: any;
    children?: any;
}

export const Dropbox: React.FC<TProps> = (props): JSX.Element => {
    const { defaultItem, data, sizeId = 'mobile', customize = {}, children } = props;

    const [selectedItem, setSelectedItem] = useState(defaultItem);

    // @ts-ignore
    const theme = { ...useTheme().components.Counter };
    const requiredThemeKeys = ['container', 'selecteditem', 'item', 'images'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            <SelectedItem sizeId={sizeId} theme={theme.selecteditem}>
                {selectedItem.text}
            </SelectedItem>
            {data.map((item: any, index: any) => (
                <Item
                    key={index}
                    sizeId={sizeId}
                    theme={theme.item}
                    onClick={() => {
                        const curItem = { ...item };
                        setSelectedItem(curItem);
                    }}>
                    {item.text}
                </Item>
            ))}
            {children}
        </CWrap>
    );
};

export default Dropbox;
