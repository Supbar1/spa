import React, { useState, createContext, ReactNode, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "./components/services/config.json";
import http from "./components/services/httpService";
interface ProductsProviderProps {
  children: ReactNode;
}

interface AppContextType {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  modalId: number | undefined;
  setModalId: React.Dispatch<React.SetStateAction<number | undefined>>;
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  perPage?: number;
  currentPage?: number;
}
export interface ProductType {
  //Czy tu lepiej w jakiś sposób wymapować
  id: number;
  color: string;
  name: string;
  pantone_value: string;
  year: number;
}
const ProductsContext = createContext({} as AppContextType);

export const useProductsContext = () => {
  return React.useContext(ProductsContext);
};

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [modalId, setModalId] = useState<number | undefined>(undefined);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { page, per_page } = useParams();

  const isPerPageValidLink = !isNaN(Number(per_page?.substring(9)));
  const perPage = isPerPageValidLink ? Number(per_page?.substring(9)) : 5;

  const [currentPage, setCurrentPage] = useState<number>(5);

  useEffect(() => {
    setCurrentPage(pageCheck());
    apiPagesNumber();
  }, [page, per_page, totalItems]);

  const pageCheck = () => {
    if (!page) {
      return 1;
    }
    if (isNaN(Number(page))) {
      return 1;
    }
    return parseInt(page);
  };

  const apiPagesNumber = async (): Promise<void> => {
    try {
      const { data } = await http.get(config.api);
      setTotalItems(data.total);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        modalId,
        setModalId,
        totalItems,
        setTotalItems,
        currentPage,
        perPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
