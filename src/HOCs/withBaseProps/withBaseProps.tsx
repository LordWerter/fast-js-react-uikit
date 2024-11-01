import React from 'react';
import { getFCTheme, getDataTestId } from 'utils';
import { FCTokens, WithBasePropsConfig } from 'constants';

export const withBaseProps = <
    ReactNodeNames,
    SourceFCProps extends { tokens: FCTokens; type?: string },
>(
    SourceFC: React.FC<SourceFCProps>,
    config: WithBasePropsConfig
): React.FC<Omit<SourceFCProps, 'theme' | 'testIds'>> => {
    const withBasePropsFC: React.FC<
        Omit<SourceFCProps, 'theme' | 'testIds'>
    > = (props) => {
        const { type = undefined, tokens } = props;
        const { name, code, nodeNames } = config;
        const theme = getFCTheme(name, type);

        const testIds: {
            [key in keyof ReactNodeNames]?: string;
        } = {};
        nodeNames.forEach((nodeName) => {
            testIds[nodeName] = getDataTestId(
                `${code}__${String(nodeName).toUpperCase()}`,
                tokens.hlaToken,
                tokens.actionToken
            );
        });
        const sourceFCProps: SourceFCProps = {
            ...props,
            theme,
            testIds,
        };

        return <SourceFC {...sourceFCProps} />;
    };

    return withBasePropsFC;
};

export default withBaseProps;
