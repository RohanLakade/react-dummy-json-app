import { useContext, useCallback } from "react";
import { ProductContext } from "@context/ProductContext";
import RenderInput from "@components/common/render-input";
import RenderSelect from "@components/common/render-select";
import { useSearchParams } from "react-router-dom";

const SearchFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchTerm, setSearchTerm, sortBy, setSortBy, order, setOrder } =
    useContext(ProductContext);

  const handleSearchChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
      if (e.target.value.trim() === "") {
        searchParams.delete("search");
      } else {
        searchParams.set("search", e.target.value);
      }
      setSearchParams(searchParams);
    },
    [setSearchTerm, searchParams, setSearchParams]
  );

  const handleSortChange = useCallback(
    (e) => {
      setSortBy(e.target.value);
      searchParams.set("sortBy", e.target.value);
      setSearchParams(searchParams);
    },
    [setSortBy, searchParams, setSearchParams]
  );

  const handleOrderChange = useCallback(
    (e) => {
      setOrder(e.target.value);
      searchParams.set("order", e.target.value);
      setSearchParams(searchParams);
    },
    [setOrder, searchParams, setSearchParams]
  );

  const handleClearSearch = () => {
    setSearchTerm("");
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  return (
    <div className="filters mb-2 m-2 p-2">
      {/* Centering search box and filters */}
      <div className="d-flex justify-content-center align-items-center flex-column">
        {/* Search Box and Filters in Same Line */}
        <div className="row align-items-center justify-content-center g-3 w-100 mb-4">
          <div className="col-12 col-sm-6 col-md-3">
            <RenderInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <RenderSelect
              value={sortBy}
              onChange={handleSortChange}
              options={[
                { value: "id", label: "Sort by ID" },
                { value: "title", label: "Sort by Title" },
                { value: "price", label: "Sort by Price" },
              ]}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <RenderSelect
              value={order}
              onChange={handleOrderChange}
              options={[
                { value: "asc", label: "Ascending" },
                { value: "desc", label: "Descending" },
              ]}
            />
          </div>
        </div>

        {searchTerm && (
          <div className="d-flex gap-2 align-items-center justify-content-center ">
            <span className="text-muted">Search Results for: {searchTerm}</span>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleClearSearch}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;
