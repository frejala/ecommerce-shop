import { useEffect } from "react";
import { Hero } from "@/components/hero";
import Product from "@/components/product";
import { fetchProducts } from "@/store/slices/products-slice";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const productsQuery = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productsQuery.loading) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const products = productsQuery.products;

  return (
    <div>
      <Hero />
      <section className="py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7.5 max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
