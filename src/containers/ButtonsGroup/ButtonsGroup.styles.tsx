import { getResultStyles } from 'utils';

import styled from '@emotion/styled';

export type TCWrapProps = ICWrapProps;

export const CWrap = styled.div<TCWrapProps>`
    display: flex;
    ${getResultStyles}
`;
