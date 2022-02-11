import { GraphQLClient } from 'graphql-request';

const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');

const graphQLClient = new GraphQLClient('/graphql', {
    headers: {
        'X-CSRF-Token': token,
    },
});

const request = query => {
    return graphQLClient.request(query);
};

export default request;
