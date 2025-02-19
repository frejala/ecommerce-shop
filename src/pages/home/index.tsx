import { Hero } from "@/components/hero";
import Product from "@/components/product";
import { PRODUCTS } from "@/constants";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7.5 max-w-sm mx-auto md:max-w-none md:mx-0">
            {PRODUCTS.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
