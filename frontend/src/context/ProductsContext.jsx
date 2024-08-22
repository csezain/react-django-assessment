import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      fetch("http://localhost:8000/api/products/")
        .then((res) => {
          return res.json();
        })
        .then(setProducts)
        .then(() => setError(false))
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useStore = () => useContext(ProductContext);
