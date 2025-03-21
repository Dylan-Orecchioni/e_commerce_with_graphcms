import { gql } from "graphql-request";

export const getOneProduct = gql`
	query GetProductById($id: ID!) {
		products(where: { id: $id }) {
			id
			name
			description
			price
			images(first: 1) {
				id
				url
			}
		}
	}
`;
