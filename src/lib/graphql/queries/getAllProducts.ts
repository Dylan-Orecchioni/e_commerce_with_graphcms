import { gql } from 'graphql-request';

export const getAllProducts = gql`
	query getAllProducts {
		products {
			id
			name
            slug
			price
			images {
                id
                url
            }
		}
	}
`;