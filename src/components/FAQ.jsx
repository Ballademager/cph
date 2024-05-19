import { useState, useRef } from "react";

const FAQQuestion = ({
  open: { open, setOpen },
  question: { question, answer },
  i,
}) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const isOpen = open === i;

  return (
    <li
      className="shadow-xl px-10 py-8 rounded-xl cursor-pointer"
      onClick={() => {
        setOpen(isOpen ? -1 : i);
        setHeight(contentRef.current.clientHeight);
      }}
    >
      <div className="flex justify-between items-center">
        <p className="text-large font-bold">{question}</p>

        <svg
          width={50}
          height={50}
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            transform: isOpen ? `rotate(180deg)` : "rotate(0deg)",
          }}
          className="transition-transform duration-300 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
      </div>

      <div
        className="relative overflow-hidden transition-height duration-300 ease-in-out"
        style={{
          height: isOpen ? height : 0,
        }}
      >
        <div className="relative h-fit" ref={contentRef}>
          {answer}
        </div>
      </div>
    </li>
  );
};

export function FAQ({ faqQuestions }) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="grid py-10 w-full">
      <div>
        <h2 className="text-4 font-bold text-cph-blue py-3">
          Skal du bruge hjælp til noget andet?
        </h2>
        <p className="text-p">
          Her kan du se hvor du skal henvende dig med spørgsmål om de ting
          kundeservice ikke hjælper med.
        </p>
      </div>
      <div>
        <ul>
          {faqQuestions.map((question, i) => (
            <FAQQuestion
              key={i}
              {...{
                open: { open, setOpen },
                question,
                i,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
