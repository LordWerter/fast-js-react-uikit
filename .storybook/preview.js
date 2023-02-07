import {
    DocsContainer,
    DocsPage,
} from '@storybook/addon-docs/blocks';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
        container: DocsContainer,
        page: DocsPage,
        controls: { expanded: true },
    },
};
