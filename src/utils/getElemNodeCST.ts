/**
 * concatinates Key Abstraction tokens into single Compound Semantic Token 4 current DOM Node
 * @param targetToken 
 * @param hlaToken 
 * @param actionToken 
 * @returns 
 */
export const getElemNodeCST = (targetToken: string, hlaToken?: string, actionToken?: string) => {

    return `${hlaToken ? `${hlaToken}____` : ''}${targetToken}${actionToken ? `____${actionToken}` : ''}`;
};

export default getElemNodeCST;
