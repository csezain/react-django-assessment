import SectionWrapper from "@/components/custom/SectionWrapper";
import React from "react";
import Products from "./_components/Products";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <SectionWrapper>
      <h1 className="text-2xl md:text-3xl text-foreground/80 font-bold mt-5">
        Fake Store Products
      </h1>

      <p className="text-muted-foreground text-sm md:text-base">
        Here you can browse fake store products at ease.
      </p>

      <Products />
    </SectionWrapper>
  );
};

export default Header;
