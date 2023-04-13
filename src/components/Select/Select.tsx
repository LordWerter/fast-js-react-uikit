import React, { useState } from 'react';

import { useTheme } from '@emotion/react';

import { TSize } from '../../definitions/proptypes';
import { mergeThemeObjects } from '../../utils';
import Image from '../Image';
import {
    CWrap,
    Label,
    List,
    MainBtn,
} from './Select.styles';

export interface IProps {
    sizeId: TSize;
    customize: unknown;
    LabelImg: string;
    LabelText: string;
    items: any[];
}

export const Select: React.FC<any> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, LabelImg, LabelText, items } = props;

    const [lblImg, setLabelImg] = useState(LabelImg);
    const [listVisibility, setListVisibility] = useState<boolean>(false);
    // @ts-ignore
    const handleListVisibility = (event: any, status?: boolean) => {
        status !== undefined ? setListVisibility(status) : setListVisibility(!listVisibility);
    };

    // @ts-ignore
    const theme: { [key in string]: any } = { ...useTheme().components.Select };
    Object.keys(theme).forEach((key: string) => {
        theme[key] = mergeThemeObjects(theme[key], customize[key]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            <MainBtn sizeId={sizeId} theme={theme.mainBtn}>
                <Label sizeId={sizeId} theme={theme.Label} onClick={handleListVisibility}>
                    <Image sizeId={sizeId} customize={theme.LabelImg} bgImage={theme.images[lblImg]} />
                    <LabelText sizeId={sizeId} theme={theme.LabelText} hasImage={!!lblImg}>
                        {LabelText}
                    </LabelText>
                </Label>
            </MainBtn>
            <List sizeId={sizeId} theme={theme.list} isVisible={listVisibility}>
                {items.map((item: any, index: number) => {
                    return (
                        <Label
                            key={index}
                            sizeId={sizeId}
                            theme={theme.Label}
                            onClick={(event: any) => {
                                const id = item.id;
                                const handler = item.handler;
                                setLabelImg(id);
                                id ? handler(id) : handler();
                                handleListVisibility(event, false);
                            }}>
                            {item.iconVisibility ? (
                                <Image sizeId={sizeId} customize={theme.LabelImg} bgImage={theme.images[item.id]} />
                            ) : (
                                <></>
                            )}
                            <LabelText sizeId={sizeId} theme={theme.LabelText} hasImage={!!item.id}>
                                {`${item.text}>${item.text}`}
                            </LabelText>
                        </Label>
                    );
                })}
            </List>
        </CWrap>
    );
};

export default Select;
