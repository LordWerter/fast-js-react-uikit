export type TCSTParts = {
    targetToken: string;
    actionToken?: string
    hlaToken?: string;
};

/**
 * concatinates Key Abstraction tokens into single Compound Semantic Token 4 current DOM Node
 * @param {TCSTParts} parts
 * @returns {string}
 */
export const getElemNodeCST = (parts: TCSTParts) => {
    const { targetToken, actionToken = null, hlaToken = null } = parts;

    return `${hlaToken ? `${hlaToken}____` : ''}${targetToken}${actionToken ? `____${actionToken}` : ''}`;
};

export default getElemNodeCST;
