import { createContext, useState, useMemo } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("asc");

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      sortBy,
      setSortBy,
      order,
      setOrder,
    }),
    [searchTerm, sortBy, order]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
