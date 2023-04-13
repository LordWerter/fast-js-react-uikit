import styled from '@emotion/styled';

import { TComponentElementProps } from '../definitions/proptypes';
import { getResultStyles } from './';

export const genComponentElement = <TReactNodeProps>(nodeName: string) => {
    type TResultProps = TComponentElementProps & TReactNodeProps;
    const htmlNode = styled[nodeName]<TResultProps>`
        ${getResultStyles}
    `;
    return htmlNode;
};

export default genComponentElement;
