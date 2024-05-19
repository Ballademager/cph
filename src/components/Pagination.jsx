import clsx from "clsx";

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages === 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <nav className="inline-flex rounded-lg shadow-sm overflow-hidden border border-grey-light">
        {currentPage > 1 && (
          <button
            className="relative inline-flex items-center px-2 py-2 bg-white text-sm border-r border-grey-light font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="size-5 mx-0.5"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72l2.72-2.72a.75.75 0 0 0-1.06-1.06zm8.25-3.25l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72l2.72-2.72a.75.75 0 0 0-1.06-1.06"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        )}
        {pages.map((page, i) => (
          <button
            key={page}
            className={clsx(
              "relative inline-flex items-center px-4 py-2 text-sm font-medium",
              {
                "bg-gray-300 text-black": page === currentPage,
                "bg-white text-gray-700 hover:bg-gray-50": page !== currentPage,
                "border-l border-grey-light": i > 0,
              }
            )}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="relative inline-flex items-center px-2 py-2 bg-white text-sm border-l border-grey-light font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="size-5 mx-0.5"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72l-2.72-2.72a.75.75 0 0 1 1.06-1.06zm-8.25-3.25l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72l-2.72-2.72a.75.75 0 0 1 1.06-1.06"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
