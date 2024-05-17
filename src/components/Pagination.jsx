import React from "react";

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages === 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <nav className="inline-flex shadow-sm -space-x-px">
        {currentPage > 1 && (
          <button
            className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {pages.map((page) => (
          <button
            key={page}
            className={`px-3 py-2 border border-gray-300 text-sm font-medium ${
              page === currentPage ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
