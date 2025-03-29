import useDebounce from "@src/utils/hooks/useDebounce";
import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const RenderSearchBar = () => {


  return (
    <>
      {/* Search & Filter Controls */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <select value={sortBy} onChange={handleSortChange}>
          <option value="id">Sort by ID</option>
          <option value="title">Sort by Title</option>
          <option value="price">Sort by Price</option>
        </select>

        <select value={order} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </>
  );
};

export default RenderSearchBar;
