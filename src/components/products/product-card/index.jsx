// Component Styles Imports
import { useNavigate } from "react-router-dom";
import "./product-card.scss";
import React from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card card h-100 border-0 shadow rounded-3 product-card-hover"
      onClick={() => navigate(`/products/${product.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div
        className="card-header overflow-hidden p-0"
        style={{ height: "180px" }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="card-img-top w-100 h-100 object-fit-cover"
          style={{ minHeight: "180px", maxHeight: "180px" }}
          loading="lazy"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text flex-grow-1 text-muted">
          {product.description}
        </p>
        <span className="fw-bold text-primary">Price: ${product.price}</span>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
