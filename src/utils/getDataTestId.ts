/**
 * generates data-testid attribute value by pattern - <HLA_SEMANTIC_TOKEN>____<TARGET_ABSTRACTION_SEMANTIC_TOKEN>____<ACTION_SEMANTIC_TOKEN>
 * As you see Compound Semantic Token consists of three parts, and each part is simple semantic token. HLA & Action Semantic Tokens are optional,
 * Target Abstraction Semantic Token is required.
 * In turn of each Semantic Token, it consists of type, name and mode of abstraction. Chunk 'Name' is required! Two others are optional.
 * @param { targetName: string, targetMode: string } targetNode - target node name and mode
 * @param {string | undefined} prefixId HLA Semantic Token
 * @param {string | undefined} postfixId Action Semantic Token
 * @returns
 */
export const getDataTestId = (
    targetNode: {
        targetName: string,
        targetMode: string,
    },
    hlaToken?: string | null | undefined,
    actionToken?: string | null | undefined
): string => {
    const { targetName, targetMode } = targetNode;
    const targetToken = `${targetName}__${targetMode}`;

    return `${hlaToken ? `${hlaToken}--` : ''}${targetToken}${
        actionToken ? `--${actionToken}` : ''
    }`;
};

export default getDataTestId;
