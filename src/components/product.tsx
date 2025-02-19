import { Product as ProductType } from "@/interfaces/product";
import { Link } from "react-router";
import { Plus, Eye } from "lucide-react";

import { useDispatch } from "react-redux";
import { add } from "@/store/slices/cart-slice";

export default function Product({ product }: { product: ProductType }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adding to cart product", product);
    dispatch(add(product));
  };

  return (
    <div>
      <div className="border border-[#e4e4e4] h-75 mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-50 mx-auto flex justify-center items-center">
            <img
              className="max-h-40 group-hover:scale-110 transition duration-200"
              src={product.image}
              alt="Product"
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="cursor-pointer" onClick={handleAddToCart}>
            <div className="flex justify-center items-center text-white size-12 bg-red-500">
              <Plus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${product.id}`}
            className="size-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <Eye className="text-3xl" />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h2 className="font-semibold mb-1">{product.title}</h2>
        </Link>
        <div className="font-semibold">$ {product.price}</div>
      </div>
    </div>
  );
}
