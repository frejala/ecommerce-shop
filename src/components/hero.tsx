import { Link } from "react-router";

export function Hero() {
  return (
    <section className="h-200 bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="container mx-auto flex justify-around h-full">
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-0.5 bg-red-500 mr-3"></div>New Trend
            </div>
            <h1 className="text-7xl leading-[1.1] font-light mb-4">
              AUTUMN SALE STYLISH <br />
              <span className="font-semibold">WOMEN'S</span>
            </h1>
            <Link
              to={"/"}
              className="self-start font-semibold uppercase border-b-2 border-primary"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
