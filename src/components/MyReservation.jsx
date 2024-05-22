import { useState } from "react";
import { getReservation } from "../supabase/getItems";

export default function MyReservation() {
  const [email, setEmail] = useState("");
  const [reservationNumber, setReservationNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleShowReservation = async () => {
    if (status === "Loading...") return;

    if (email === "" || reservationNumber === "") {
      setStatus("Udfyld venligst alle felter.");
      return;
    }

    setStatus("Søger efter reservation...");

    const reservation = await getReservation({ id: reservationNumber, email });

    if (reservation.data.length === 0) {
      setStatus("Ingen reservation fundet.");
      return;
    }

    setStatus(
      "Vi har fundet din reservation, og har sendt en email med detaljerne."
    );
  };

  // test@gmail.com 0000-0000-0000
  return (
    <div class="w-full mb-16">
      <h2 class="mb-5 text-4 font-bold text-center text-cph-blue">
        Min Reservation
      </h2>

      <div class="flex gap-4 justify-center px-10 flex-col md:flex-row">
        <div class="mb-6 w-full">
          <input
            type="email"
            id="email"
            content={email}
            onChange={(e) => setEmail(e.target.value)}
            class="block w-full p-3 border border-grey-lighter rounded-md h-14"
            placeholder="Din e-mailadresse"
          />
          <p class="text-small">
            Den e-mail du brugte, da du foretog din reservation
          </p>
        </div>

        <div class="mb-6 w-full">
          <input
            type="text"
            id="reservationNumber"
            content={reservationNumber}
            onChange={(e) => setReservationNumber(e.target.value)}
            class="block w-full p-3 border border-grey-lighter rounded-md h-14"
            placeholder="Dit reservationsnummer"
          />
          <p class="text-small">
            Du finder reservationsnummer i din ordrebekræftelse
          </p>
        </div>
      </div>

      <div class="flex justify-center px-10 flex-col">
        <button
          type="button"
          class="self-center w-fit px-20 py-3 text-sm font-semibold text-cph-white bg-cph-blue rounded-md"
          onClick={handleShowReservation}
        >
          Vis min reservation
        </button>

        <a href="#" class="self-center hover:underline">
          Glemt dit reservationsnummer?
        </a>
      </div>

      {status && (
        <p className="text-center text-large font-medium mt-4">{status}</p>
      )}
    </div>
  );
}
