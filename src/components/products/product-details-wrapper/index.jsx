import useFetchProductById from "@src/utils/hooks/useFetchProductById";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailsWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useFetchProductById(id);

  if (loading)
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center vh-100 d-flex align-items-center justify-content-center">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="container-fluid mt-4">
      {/* Back Button */}
      <button className="btn btn-light mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="card shadow-lg border-0">
        <div className="row g-0 align-items-center">
          {/* Product Image Section */}
          <div className="col-12 col-md-5 d-flex flex-column align-items-center p-3">
            {/* Main Image */}
            <img
              src={product.thumbnail}
              className="img-fluid rounded object-fit-cover"
              alt={product.title}
              style={{ maxWidth: "400px", maxHeight: "350px" }}
            />

            {/* Additional Images Below Main Image */}
            {product.images?.length > 1 && (
              <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="img-thumbnail"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="col-12 col-md-7">
            <div className="card-body">
              <h2 className="card-title fw-bold">{product.title}</h2>
              <p className="text-muted">{product.description}</p>

              <div className="row">
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Category:</strong> {product.category}
                    </li>
                    <li className="list-group-item">
                      <strong>Brand:</strong> {product.brand}
                    </li>
                    <li className="list-group-item">
                      <strong>Stock:</strong> {product.stock} items available
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Discount:</strong> {product.discountPercentage}%
                      off
                    </li>
                    <li className="list-group-item">
                      <strong>Rating:</strong> {product.rating} ⭐
                    </li>
                    <li className="list-group-item">
                      <strong>Price:</strong>{" "}
                      <span className="text-primary fw-bold">
                        ${product.price}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 d-flex flex-column flex-md-row gap-2">
                <button className="btn btn-success w-100">Add to Cart</button>
                <button className="btn btn-outline-primary w-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsWrapper;
