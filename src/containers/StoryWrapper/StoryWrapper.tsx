import React, { ReactNode } from 'react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import GlobalStyles from '../GlobalStyles';
import { CWrap } from './StoryWrapper.styles';

export interface IProps {
    theme: any;
    children?: ReactNode;
    initialEntries?: any;
    bgColor?: string;
}

export const StoryWrapper: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { children, theme = null, initialEntries = ['/'], bgColor = 'white' } = props;

    return (
        <ThemeProvider theme={theme}>
            <CWrap bgColor={bgColor}>
                <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
            </CWrap>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default StoryWrapper;
