import { useTheme } from '@emotion/react';

import { mergeThemeObjects } from './mergeThemeObjects';

export type FCThemeParams = {
    FCName: string;
    typeToken?: string | null;
    nodeNames: string[];
    customize?: FCThemeCustoms;
};

export const getFCTheme = (params: FCThemeParams): FCTheme => {
    const { FCName, typeToken = null, nodeNames, customize = {} } = params;

    const fullTheme = useTheme();
    let targetTheme = { ...fullTheme[FCName] };
    if (typeToken) targetTheme = { ...targetTheme[typeToken] };

    nodeNames.map((nodeName: string) => {
        targetTheme[nodeName] = mergeThemeObjects(
            targetTheme[nodeName],
            customize[nodeName]
        );
    });

    return targetTheme;
};

export default getFCTheme;
