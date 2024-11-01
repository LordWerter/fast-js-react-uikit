import React from 'react';
import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { Text } from '../../';

export const withGraphQLFetch = (
    SourceFC: React.FC,
    dataQuery: DocumentNode,
    variables?: any,
    params2FC?: Record<string, any>
): React.FC => {
    const FCWithGraphQLFetch: React.FC = (): JSX.Element => {
        const { loading, error, data } = useQuery<any>(dataQuery, {
            fetchPolicy: 'network-only',
            variables: !variables ? null : { ...variables },
        });

        return (
            <>
                {loading && (
                    <Text nodeName='P' type='T1' tokens={{}}>
                        Loading, please wait...
                    </Text>
                )}
                {error && (
                    <Text nodeName='P' type='T1' tokens={{}}>
                        {error.message}
                    </Text>
                )}
                {data && (
                    // @ts-ignore
                    <SourceFC data={data} {...params2FC} />
                )}
            </>
        );
    };

    return FCWithGraphQLFetch;
};

export default withGraphQLFetch;
