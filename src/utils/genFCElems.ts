import { genComponentElement } from './';

export type TElement = {
    name: string;
    tag: string;
};

/**
 * renders BasicButton Item
 * @param {TElement[]} elemList is array with element declarations
 * @type {Function}
 * @returns Object with Emotion Styled Elements
 */
export const genFCElems = (elemList: TElement[]): any => {
    const output = {};

    elemList.map((element: TElement) => {
        const { name, tag } = element;

        output[name] = genComponentElement(tag);
    });
    return output;
};

export default genFCElems;
