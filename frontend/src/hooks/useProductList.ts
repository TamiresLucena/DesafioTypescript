import { useEffect, useState } from "react";
import { api } from "../api";

export const useProductList = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [erro, setErro] = useState(false);

  const getProductList = async () => {
    try {
      setErro(false);
      setLoading(true);
      const response = (await api.get("/api/v1/products")) as any;
      setProductList(response.data.products);
    } catch (err) {
      setErro(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return { loading, productList, erro, getProductList };
};
