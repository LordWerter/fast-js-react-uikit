import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/proptypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    display: flex;
    ${getResultStyles}
`;
