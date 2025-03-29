// React & Third-Party Libraries Imports
import { useNavigate, useParams } from "react-router-dom";

// Project Utilities & API Helpers Imports
import useFetchProductById from "@utils/hooks/useFetchProductById";

import ProductDetailsWrapper from "@components/products/product-details-wrapper";
import NoProductFound from "@src/components/products/no-product-found";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProductById(id);
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading Product Details...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <>
        <button className="btn btn-light mb-3" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
        <div className="alert alert-danger text-center mt-4">
          <p>Error: {error}</p>
        </div>
      </>
    );
  if (!product) return <NoProductFound />;

  return <ProductDetailsWrapper product={product} />;
};

export default ProductDetails;
