import { useState, useEffect } from "react";

const useFetchProducts = (page, limit, searchQuery, sortBy, order) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        // Create a URLSearchParams object to handle query parameters
        const params = new URLSearchParams();
        params.set("limit", limit);
        params.set("skip", (page - 1) * limit);

        // Append sortBy and order if they exist
        if (sortBy) {
          params.set("sortBy", sortBy);
          params.set("order", order);
        }

        // final URL with query parameters
        const url = `${import.meta.env.VITE_API_URL}?${params.toString()}`;

        let response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");

        let data = await response.json();
        let filteredProducts = data.products;

        if (searchQuery && searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase();
          filteredProducts = filteredProducts.filter(
            (product) =>
              product.title.toLowerCase().includes(query) ||
              product.description.toLowerCase().includes(query)
          );
        }

        setProducts(filteredProducts);
        setTotalProducts(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, searchQuery, sortBy, order]);

  return { products, totalProducts, loading, error };
};

export default useFetchProducts;
