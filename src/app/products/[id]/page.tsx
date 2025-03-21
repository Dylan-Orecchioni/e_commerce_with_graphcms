import graphql from "@/lib/graphql";
import { getOneProduct } from "@/lib/graphql/queries/getOneProduct";
import Image from "next/image";
import Link from "next/link";
const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params; 
	let product;
	try {
		const response = await graphql.request<{
			product: {
				id: string;
				name: string;
				price: number;
				title: string;
				description: string;
			};
		}>(getOneProduct, { id });
		product = response.products[0];
	} catch (error) {
		console.error("Error fetching product:", error);
		return (
			<div>Error loading product details. Please try again later.</div>
		);
	}

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<main className="container mx-auto py-12 px-6">
			<Link
				className="inline-block mb-6 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors duration-300"
				href="/products"
			>
				← Back to products
			</Link>
			<section className="flex flex-col md:flex-row items-center gap-12 bg-white shadow-xl rounded-2xl p-10">
				<Image
					className="rounded-xl object-cover transition-transform duration-300 hover:scale-105"
					src={product.images[0].url}
					alt={product.name}
					width={500}
					height={500}
				/>
				<div className="flex flex-col gap-6">
					<h1 className="font-extrabold text-4xl md:text-5xl text-gray-800">
						{product.name}
					</h1>
					<p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
					<p className="font-bold text-3xl text-gray-900">${product.price}</p>
					<button className="w-fit bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105">
						Add to cart
					</button>
				</div>
			</section>
		</main>
	);
};

export default ProductDetailsPage;
