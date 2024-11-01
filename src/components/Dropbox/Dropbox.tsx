import React, { useState } from 'react';

import { DropboxElems } from '../../constants';
import { TSize } from '../../definitions/proptypes';
import { genFCElems, getElemNodeCST, getFCTheme } from '../../utils';

export interface DropboxItem {
    key: string;
    text: string;
    handleOnClick: (
        event: React.MouseEvent<HTMLButtonElement>,
        data?: unknown
    ) => unknown;
}

export interface Props {
    sizeId?: TSize;
    customize?: any;
    defaultItemKey: string;
    items: {
        [key: string]: DropboxItem;
    };
    typeToken?: string | null;
    hlaToken?: string;
    actionToken?: string;
}

export const Dropbox: React.FC<Props> = (props): JSX.Element => {
    const {
        defaultItemKey,
        items,
        sizeId = 'mobile',
        customize = {},
        typeToken = null,
        hlaToken,
        actionToken,
    } = props;

    const [selectedItemKey, setSelectedItemKey] = useState(defaultItemKey);
    const [showItems, setShowItems] = useState(false);

    const { CWrap, HeadBtn, ItemsWrap, Item } = genFCElems(DropboxElems);
    const theme = getFCTheme({
        FCName: 'Dropbox',
        typeToken,
        nodeNames: ['CWrap', 'HeaderBtn', 'ItemsWrap', 'Item'],
        customize,
    });

    const testIds = {
        CWrap: getElemNodeCST(`SWITCH_BTN__CWRAP`, hlaToken, actionToken),
        HeadBtn: getElemNodeCST(`SWITCH_BTN__Head_Btn`, hlaToken, actionToken),
        ItemsWrap: getElemNodeCST(
            `SWITCH_BTN__Items_Wrap`,
            hlaToken,
            actionToken
        ),
        Item: getElemNodeCST(`SWITCH_BTN__Item`, hlaToken, actionToken),
    };

    return (
        <CWrap sizeId={sizeId} theme={theme.CWrap} data-testid={testIds.CWrap}>
            <HeadBtn
                sizeId={sizeId}
                theme={theme.HeaderBtn}
                data-testid={testIds.HeadBtn}
                onClick={() => setShowItems(true)}>
                {items[selectedItemKey].text}
            </HeadBtn>
            <ItemsWrap
                sizeId={sizeId}
                theme={theme.ItemsWrap}
                data-testid={testIds.ItemsWrap}
                className={showItems ? 'isVisible' : ''}
                onClick={() => setShowItems(false)}>
                {Object.keys(items).map((itemKey: any) => {
                    const { key, text, handleOnClick } = items[itemKey];
                    return (
                        <Item
                            key={key}
                            sizeId={sizeId}
                            theme={theme.Item}
                            data-testid={testIds.CWrap}
                            className={
                                key === selectedItemKey ? 'isSelected' : ''
                            }
                            onClick={(
                                event: React.MouseEvent<
                                    HTMLButtonElement,
                                    MouseEvent
                                >
                            ) => {
                                const curKey = key;
                                setSelectedItemKey(curKey);
                                handleOnClick(event, curKey);
                            }}>
                            {text}
                        </Item>
                    );
                })}
            </ItemsWrap>
        </CWrap>
    );
};

export default Dropbox;
