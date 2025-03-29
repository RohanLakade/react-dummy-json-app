import RenderButton from "@src/components/common/render-button";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination d-flex justify-content-center align-items-center gap-2 py-5">
      <RenderButton
        id="first"
        name="first"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </RenderButton>
      <RenderButton
        id="Prev"
        name="Prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </RenderButton>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <RenderButton
        id="Next"
        name="Next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </RenderButton>
      <RenderButton
        id="Last"
        name="Last"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </RenderButton>
    </div>
  );
};

export default React.memo(Pagination);
