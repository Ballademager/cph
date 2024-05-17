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

  useEffect(() => {
    (async () => {
      const res = await getItems(page, pageSize);

      if (res.data && !res.error) {
        setItems(res.data);
        setTotalItems(res.count);
      } else {
        setItems([]);
      }
      console.log("Items: ", res.data); //Debug line
      console.log("Total items: ", res.count); //Debug line
    })();
  }, [page, pageSize]);

  return (
    <section className="px-10 max-w-[1024px] w-full mx-auto">
      <LostAndFoundCard className="w-full">
        <div className="flex w-full gap-3">
          <Drop
            title={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-5 h-5 mr-2"
                >
                  <path d="m21 16-4 4-4-4"></path>
                  <path d="M17 20V4"></path>
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                </svg>
                Sort By
              </>
            }
            options={["Date", "Location", "Type"]}
            hideArrow
          />

          <Drop
            title={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-5 h-5 mr-2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter
              </>
            }
            options={[
              "Briefcase",
              "Clothing",
              "Wallet",
              "Glasses",
              "Umbrella",
              "Headphones",
            ]}
            hideArrow
          />
        </div>

        <div className="grid w-full gap-3 grid-cols-2">
          {items &&
            items.map((item) => <LostAndFoundItem key={item.i} item={item} />)}
        </div>

        <div className="p-10">
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
