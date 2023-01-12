import React, { useState } from "react";
import { useProductsContext } from "./../Context";

const SearchBar = () => {
  const { products } = useProductsContext();

  const [productIndex, setProductIndex] = useState<number | undefined>(
    undefined
  );
  const handleChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (0 < Number(input.value) && 7 > Number(input.value)) {
      console.log(input.value);
      return setProductIndex(Number(input.value) - 1);
    }
    return setProductIndex(undefined);
  };

  return (
    <div>
      <p>
        Type item index:
        <input type="number" defaultValue="" onChange={handleChange} />
      </p>
      <h2>{productIndex === undefined ? null : products[productIndex].name}</h2>
    </div>
  );
};

export default SearchBar;
