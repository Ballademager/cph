const icons = {
  Briefcase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
    </svg>
  ),
  Clothing: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
    </svg>
  ),
  Wallet: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
    </svg>
  ),
  Glasses: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="6" cy="15" r="4"></circle>
      <circle cx="18" cy="15" r="4"></circle>
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"></path>
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"></path>
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"></path>
    </svg>
  ),
  Umbrella: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
      <path d="M12 12v8a2 2 0 0 0 4 0"></path>
      <path d="M12 2v1"></path>
    </svg>
  ),
  Headphones: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
    </svg>
  ),
};

export default function LostAndFoundItem({ item }) {
  return (
    <div className="flex gap-3 p-3 rounded-md border-[1px] border-grey-lighter">
      <div className="flex items-center">
        <div className="flex justify-center items-center border-[1px] border-grey-light size-8 rounded-full bg-grey-lighter">
          <div className="min-w-5 min-h-5 max-w-5 max-h-5">
            {icons[item.item_type]}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-bold">{item.item_name}</h2>
        <p className="text-grey-text text-small font-medium">
          {item.item_location}, {item.item_date}
        </p>
        <p className="bg-grey-lighter w-fit rounded-lg border-[1px] border-grey-light text-smaller px-1 font-semibold mt-2">
          {item.item_type}
        </p>
      </div>

      <div className="flex items-center">
        <a
          href="#"
          class="text-white text-small border-[1px] border-grey-lighter font-medium rounded-lg text-sm px-2 py-1"
        >
          Claim
        </a>
      </div>
    </div>
  );
}
