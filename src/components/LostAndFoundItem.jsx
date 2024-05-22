const icons = {
  "Mindre Taske": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v424H128V128zm-64 0h32v384H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m384 384h-32V96h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64"
      />
    </svg>
  ),
  "Mobiltelefon / Tablet": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
      />
    </svg>
  ),
  Pung: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h368c17.7 0 32-14.3 32-32s-14.3-32-32-32zm352 240a32 32 0 1 1 0 64a32 32 0 1 1 0-64"
      />
    </svg>
  ),
  Bærbar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M1.364 2.35v10.794h17.272V2.35zM19.09 1c.502 0 .909.403.909.9v11.694c0 .497-.407.9-.91.9l-8.53-.001v3.157h3.437c.377 0 .682.303.682.675a.678.678 0 0 1-.682.675H5.981a.678.678 0 0 1-.682-.675c0-.372.306-.674.682-.674l3.216-.001v-3.157H.909A.904.904 0 0 1 0 13.595V1.9c0-.497.407-.9.91-.9z"
      />
    </svg>
  ),
  Kamera: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M149.1 64.8L138.7 96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-74.7l-10.4-31.2C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8M256 192a96 96 0 1 1 0 192a96 96 0 1 1 0-192"
      />
    </svg>
  ),
  Høretelefoner: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V288C0 146.6 114.6 32 256 32s256 114.6 256 256v112c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80"
      />
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
