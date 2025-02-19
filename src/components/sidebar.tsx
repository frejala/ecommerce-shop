import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import CartItem from "@/components/cart-item";

import { Trash2 } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { open, close } from "@/store/slices/sidebar-slice";
import { clear } from "@/store/slices/cart-slice";
import { Link } from "react-router";

export function Sidebar() {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const cart = useSelector((state: RootState) => state.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = useSelector((state: RootState) => state.cart.length);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clear());
  };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(isOpen) => (isOpen ? dispatch(open()) : dispatch(close()))}
    >
      <SheetContent className="w-full md:w-[35vw] xl:max-w-[30vw]">
        <SheetHeader>
          <SheetTitle>Shopping Bag ({totalItems})</SheetTitle>
          <SheetDescription>Sidebar content goes here</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-y-2 h-[calc(100%-4rem)] overflow-y-auto overflow-x-hidden">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <SheetFooter>
          <div className="flex flex-col gap-y-3 py-4 mt-4">
            <div className="flex w-full justify-between items-center">
              <div className="uppercase font-semibold">
                <span className="mr-2">Total:</span> $ {totalPrice.toFixed(2)}
              </div>
              <div
                className="cursor-pointer py-4 bg-red-500 text-white size-12 flex justify-center  items-center text-xl"
                onClick={handleClearCart}
              >
                <Trash2 />
              </div>
            </div>
            <Link
              to={"/"}
              className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
            >
              View Cart
            </Link>
            <Link
              to={"/"}
              className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
            >
              Checkout
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
