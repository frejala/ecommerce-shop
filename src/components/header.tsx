import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { open, close } from "@/store/slices/sidebar-slice";
import { Link } from "react-router";

import logo from "@/img/logo.svg";
import { cn } from "@/lib/utils";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const totalItems = useSelector((state: RootState) => state.cart.length);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  });

  return (
    <header
      className={cn(
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6",
        "fixed w-full z-10 transition-all"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-10 " src={logo} alt="Logo" />
          </div>
        </Link>
        <div
          onClick={() => (isOpen ? dispatch(close()) : dispatch(open()))}
          className="cursor-pointer flex relative"
        >
          <ShoppingBag size={24} />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-xs w-4.5 text-white rounded-full flex justify-center items-center">
            {totalItems}
          </div>
        </div>
      </div>
    </header>
  );
}
