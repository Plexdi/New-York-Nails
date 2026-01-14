import React from "react";

type BookNowButtonProps = {
  className?: string;
  children?: React.ReactNode; // <-- allows <span>, icons, etc.
  target?: React.HTMLAttributeAnchorTarget;
};

export function BookNowButton({
  className = "",
  children = "Book Now",
  target,
}: BookNowButtonProps) {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;
  console.log(url)

  if (!url) return null;

  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  return (
    <a href={url} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}
