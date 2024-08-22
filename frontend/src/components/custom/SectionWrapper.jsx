import { cn } from "@/lib/utils";
import React from "react";

const SectionWrapper = ({ as = "section", children, className }) => {
  const Component = as;

  return (
    <Component className={cn("container px-10 py-5", className)}>{children}</Component>
  );
};

export default SectionWrapper;
