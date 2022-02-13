import { GraphQLClient } from 'graphql-request';

const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');

const graphQLClient = new GraphQLClient('/graphql', {
    headers: {
        'X-CSRF-Token': token,
    },
});

const request = (query, params) => {
    return graphQLClient.request(query, params);
};

export default request;
