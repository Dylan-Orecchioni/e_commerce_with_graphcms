import { GraphQLClient } from 'graphql-request';
const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";
const GRAPHQL_API_KEY = process.env.GRAPHCMS_API_KEY || "";

const authorization = `Bearer ${GRAPHQL_API_KEY}`;

if (!GRAPHQL_ENDPOINT) {
	throw new Error('GRAPHQL_ENDPOINT is not defined');
}

const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
	headers: {
		...(GRAPHQL_API_KEY && { authorization }),
	},
});

export default graphqlClient;