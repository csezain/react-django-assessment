import { cn } from "@/lib/utils";

function Skeleton({ className, as = "span", ...props }) {
  const Element = as;
  return (
    <Element
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
