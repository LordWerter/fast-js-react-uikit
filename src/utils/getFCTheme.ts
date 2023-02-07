import { useTheme } from '@emotion/react';

import { mergeThemeObjects } from './mergeThemeObjects';

export type TFCThemeParams = {
    FCName: string;
    typeToken?: string | null;
    nodeNames: string[];
    customize?: any;
};

export const getFCTheme = (params: TFCThemeParams) => {
    const { FCName, typeToken = null, nodeNames, customize = {} } = params;

    const fullTheme = useTheme();
    let targetTheme = { ...fullTheme[FCName] };
    if (typeToken) targetTheme = { ...targetTheme[typeToken] };

    nodeNames.map((nodeName: string) => {
        targetTheme[nodeName] = mergeThemeObjects(targetTheme[nodeName], customize[nodeName]);
    });

    return targetTheme;
};

export default getFCTheme;
