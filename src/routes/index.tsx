import { Route, Routes as RoutesComponent } from "react-router";

import Home from "@/pages/home";
import ProductDetails from "@/pages/product-details";
import Layout from "@/components/layout";

function Routes() {
  return (
    <RoutesComponent>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    </RoutesComponent>
  );
}

export default Routes;
