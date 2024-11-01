import React from 'react';
import { getFCTheme, getDataTestId } from '../../utils';

export const withLoader: React.FC<Props> = (
    SourceFC: React.FC
): JSX.Element => {
    const OutputFC = (props: Props) => {
        return <>OutputFC</>;
    };
    return OutputFC;
};
