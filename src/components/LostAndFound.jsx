import LostAndFoundItem from "./LostAndFoundItem";
import LostAndFoundCard from "./LostAndFoundCard";
import Drop from "./Drop";
import { getItems } from "../supabase/getItems";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function randomPlace() {
  const places = [
    "Terminal 1",
    "Terminal 2",
    "Terminal 3",
    "In Plane",
    "Security",
  ];

  return places[Math.floor(Math.random() * places.length)];
}

export default function LostAndFound() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const [totalItems, setTotalItems] = useState(0);

  const [sortBy, setSortBy] = useState(-1);
  const [filterBy, setFilterBy] = useState(-1);

  useEffect(() => {
    (async () => {
      const sort = [undefined, "item_date", "item_location", "item_type"][
        sortBy
      ];

      const filter = [
        undefined,
        "Briefcase",
        "Clothing",
        "Wallet",
        "Glasses",
        "Umbrella",
        "Headphones",
      ][filterBy];

      const res = await getItems(sort, filter, page, pageSize);

      if (res.data && !res.error) {
        setItems(res.data);
        setTotalItems(res.count);
      } else {
        setItems([]);
      }

      console.log("Items: ", res.data); //Debug line
      console.log("Total items: ", res.count); //Debug line
    })();
  }, [page, pageSize, sortBy, filterBy]);

  return (
    <section className="px-10 max-w-[1024px] w-full mx-auto">
      <LostAndFoundCard className="w-full">
        <div className="flex w-full gap-3">
          <Drop
            title={
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4 mr-2"
                >
                  <path d="m21 16-4 4-4-4"></path>
                  <path d="M17 20V4"></path>
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                </svg>
                Sort By
              </>
            }
            options={["None", "Date", "Location", "Type"]}
            hideArrow
            selected={sortBy}
            onSelect={(value) => {
              if (value === 0) {
                setSortBy(-1);
              } else {
                setSortBy(value);
              }
            }}
          />

          <Drop
            title={
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4 mr-2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter
              </>
            }
            options={[
              "None",
              "Briefcase",
              "Clothing",
              "Wallet",
              "Glasses",
              "Umbrella",
              "Headphones",
            ]}
            hideArrow
            selected={filterBy}
            onSelect={(value) => {
              if (value === 0) {
                setFilterBy(-1);
              } else {
                setFilterBy(value);
              }
            }}
          />
        </div>

        <div className="grid w-full gap-3 grid-cols-2">
          {items &&
            items.map((item) => <LostAndFoundItem key={item.i} item={item} />)}
        </div>

        <div>
          <Pagination
            currentPage={page}
            totalCount={totalItems}
            pageSize={pageSize}
            onPageChange={(page) => {
              console.log("Changing to page: ", page);
              setPage(page);
            }}
          />
        </div>
      </LostAndFoundCard>
    </section>
  );
}
