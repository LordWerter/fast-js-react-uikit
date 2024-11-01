import { getDataTestId, FCTokens } from '..';

export const getDataTestIdsDict = (
    componentName: string,
    nodeNames: string[],
    tokens: FCTokens
): Record<string, string> => {
    const output: Record<string, string> = {};

    nodeNames.forEach((nodeName) => {
        output[nodeName] = getDataTestId(tokens);
    });

    return output;
};
