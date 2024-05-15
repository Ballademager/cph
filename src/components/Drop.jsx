import { useState } from "react";
import clsx from "clsx";
import { useClickAway } from "@uidotdev/usehooks";

export default function Drop({ title, options, hideArrow }) {
  const [dropdown, setDropdown] = useState(false);

  const ref = useClickAway(() => {
    setDropdown(false);
  });

  return (
    <div className="relative" ref={ref}>
      <button
        class="text-white border-grey-lighter border-[1px] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setDropdown(!dropdown)}
      >
        {title}{" "}
        {!hideArrow && (
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
      </button>

      <div
        className={clsx(
          "z-50 bg-cph-white border-grey-lighter border-[1px] min-w-full divide-y divide-gray-100 rounded-lg shadow absolute mt-2",
          { hidden: !dropdown }
        )}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {options.map((sort) => (
            <li key={sort}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                {sort}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
