import ErrorBlock from "@/components/custom/ErrorBlock";
import ProductCard, {
  ProductCardSkelton,
} from "@/components/custom/ProductCard";

import { useStore } from "@/context/ProductsContext";
import React from "react";

const Products = () => {
  const { products, loading, error } = useStore();

  if (error) {
    return <ErrorBlock />;
  }

  if (loading) {
    return (
      <ComponentsWrapper>
        {Array.from({ length: 20 })
          .fill(0)
          .map((_, index) => (
            <ProductCardSkelton key={index} />
          ))}
      </ComponentsWrapper>
    );
  }

  return (
    <ComponentsWrapper>
      {products &&
        products.map(({ id, ...rest }, ind) => (
          <ProductCard key={ind} {...rest} />
        ))}
    </ComponentsWrapper>
  );
};

const ComponentsWrapper = ({ children }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 gap-5">
      {children}
    </div>
  );
};

export default Products;
