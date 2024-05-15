import clsx from "clsx";

export default function LostAndFoundCard({ children, className }) {
  return (
    <div
      className={clsx(
        "flex flex-col shadow-card p-4 gap-3 justify-center items-center rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
