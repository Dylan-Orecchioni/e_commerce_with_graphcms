import ProductList from "@/components/ProductList";
import graphql from "@/lib/graphql";
import { getAllProducts } from "@/lib/graphql/queries/getAllProducts";

export const revalidate = 60;
export const dynamicParams = true;

export default async function Page() {
  const { products } = await graphql.request<{
    products: { id: string; name: string; price: number }[];
  }>(getAllProducts);

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">Products</h1>
      <ul>
        <ProductList products={products} />
      </ul>
    </main>
  );
}
