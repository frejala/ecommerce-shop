import { PRODUCTS } from "@/constants";
import { useParams } from "react-router";

import { useDispatch } from "react-redux";
import { add } from "@/store/slices/cart-slice";

export default function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adding to cart product", product);
    dispatch(add(product));
  };

  const product = PRODUCTS.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-50 lg:max-w-sm"
              src={product.image}
              alt="Product"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl font-medium mb-2 max-w-112.5 mx-auto lg:mx-0">
              {product.title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {product.price}
            </div>
            <p className="mb-8">{product.description}</p>
            <button
              className="bg-primary py-4 px-8 text-white cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
