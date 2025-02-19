import { CartItem as CartItemType } from "@/interfaces/cart";
import { Link } from "react-router";

import { X, Minus, Plus } from "lucide-react";

import { useDispatch } from "react-redux";
import { add, remove } from "@/store/slices/cart-slice";

export default function CartItem({ item }: { item: CartItemType }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(remove(item));
  };

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-37.5 flex items-center gap-x-4">
        <Link to={`/products/${item.id}`} className="flex-1">
          <img className="max-w-20" src={item.image} alt="Product" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-60 text-primary hover:underline"
              to={`/products/${item.id}`}
            >
              {item.title}
            </Link>
            <div className="text-xl cursor-pointer">
              <X className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-9 text-sm">
            <div className="flex flex-1 max-w-25 items-center h-full border text-primary font-medium">
              <div
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
                onClick={handleRemoveFromCart}
              >
                <Minus />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {item.quantity}
              </div>
              <div
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
                onClick={handleAddToCart}
              >
                <Plus />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {item.price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              $ {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
