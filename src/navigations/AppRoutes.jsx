import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@components/layout/Layout";
import NotFound from "@pages/not-found/NotFound";
import ProductListing from "@pages/product-listing";
import ProductDetail from "@src/pages/product-details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products?page=1" replace />} />
      <Route element={<Layout />}>
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
