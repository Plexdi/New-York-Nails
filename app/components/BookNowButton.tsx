import React from "react";

type BookNowButtonProps = {
  className?: string;
  children?: React.ReactNode; // <-- allows <span>, icons, etc.
};

export function BookNowButton({
  className = "",
  children = "Book Now",
}: BookNowButtonProps) {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;
  console.log(url)

  if (!url) return null;

  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
}
