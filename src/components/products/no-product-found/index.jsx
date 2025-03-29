const NoProductFound = () => {
  return (
    <div className="container mt-5" style={{ minHeight: "50vh" }}>
      <div className="card shadow-lg border-0 text-center p-4 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <i className="bi bi-cart-x display-3 text-danger"></i>
          <h2 className="fw-bold mt-3">No Products Found</h2>
        </div>
      </div>
    </div>
  );
};

export default NoProductFound;
