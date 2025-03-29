// React & Third-Party Libraries Imports
import { useEffect, useMemo, useCallback, useContext } from "react";
import { useSearchParams } from "react-router-dom";

// Project Utilities & API Helpers Imports
import useFetchProducts from "@utils/hooks/useFetchProducts";

// Components Imports
import ProductCard from "@components/products/product-card";
import Pagination from "./pagination";

// Component Styles Imports
import "./product-listing-wrapper.scss";
import { ProductContext } from "@src/context/ProductContext";
import NoProductFound from "../no-product-found";

const ProductListingWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { searchTerm, sortBy, order } = useContext(ProductContext);
  const currentPage = useMemo(
    () => Math.max(1, parseInt(searchParams.get("page")) || 1),
    [searchParams]
  );

  const itemsPerPage = 10;
  const { products, totalProducts, loading, error } = useFetchProducts(
    currentPage,
    itemsPerPage,
    searchTerm,
    sortBy,
    order
  );

  const totalPages = useMemo(
    () => Math.ceil(totalProducts / itemsPerPage),
    [totalProducts, itemsPerPage]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set("page", newPage);
      searchTerm
        ? updatedSearchParams.set("search", searchTerm)
        : updatedSearchParams.delete("search");
      updatedSearchParams.set("sortBy", sortBy);
      updatedSearchParams.set("order", order);
      setSearchParams(updatedSearchParams);
    },
    [searchParams, setSearchParams, searchTerm, sortBy, order]
  );

  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    searchTerm
      ? updatedSearchParams.set("search", searchTerm)
      : updatedSearchParams.delete("search");
    updatedSearchParams.set("sortBy", sortBy);
    updatedSearchParams.set("order", order);
    setSearchParams(updatedSearchParams);
  }, [searchTerm, sortBy, order, setSearchParams, searchParams]);

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center mt-4">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="product-listing container mt-4">
      <div className="product-grid row g-3">
        {products.length === 0 ? (
          <NoProductFound />
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex gap-4"
            >
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>

      {!searchTerm && totalPages > 1 && products.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProductListingWrapper;
