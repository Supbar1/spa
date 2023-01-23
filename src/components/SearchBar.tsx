import React, { useState, useEffect } from "react";
import { ProductType, useProductsContext } from "./../Context";
import styled from "styled-components";
import config from "./services/config.json";
import httpService from "./services/httpService";
import { AxiosResponse } from "axios";

const ResultButton = styled.button<{ color: string }>`
  background-color: rgba(255, 255, 255, 0);
  padding: 1rem;
  border: none;
  border-radius: 423px;
  font-weight: bold;
  width: 100%;
  position: relative;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0.5rem 0;
  text-decoration: underline;

  ::before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    content: "";
    border-radius: 423px;
  }
  :hover::before {
    background: ${(props) => props.color};
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
    color: white;
    border: 1px solid white;
  }
`;
const Header = styled.h3`
  margin: 0.8rem;
`;
const Input = styled.input`
  text-align: center;
  border: none;
  border-bottom: 3px solid black;
`;
const SearchBar = () => {
  const { setModalId, totalItems } = useProductsContext();
  const [productIndex, setProductIndex] = useState<number | undefined>(
    undefined
  );
  const [searchResult, setSearchResult] = useState<ProductType>(
    {} as ProductType
  );
  const apiSearchResult = async (): Promise<void> => {
    if (productIndex === undefined) {
      return;
    }
    try {
      const response: AxiosResponse<{ data: any }> = await httpService.get(
        `${config.api}/${productIndex}`
      );
      if (response.status === 200) {
        setSearchResult(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiSearchResult();
  }, [productIndex]);

  const handleChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const isInputValidNumber =
      0 < Number(input.value) && totalItems! >= Number(input.value);

    if (isInputValidNumber) {
      return setProductIndex(Number(input.value));
    }
    return setProductIndex(undefined);
  };

  return (
    <>
      <Header>Type item index: &nbsp;</Header>
      <Input type="number" defaultValue="" onChange={handleChange} />
      {productIndex === undefined ? (
        <></>
      ) : (
        <ResultButton
          color={searchResult.color}
          onClick={() => setModalId(searchResult.id)}
        >
          {searchResult.name}
        </ResultButton>
      )}
    </>
  );
};

export default SearchBar;
