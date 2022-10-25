import type { NextPage } from "next";
import { Grid } from "../../components/grid";
import { Header } from "../../components/header";
import { useProductList } from "../../hooks/useProductList";

const Products: NextPage<any> = () => {
  const { loading, erro, productList, getProductList } = useProductList();

  return (
    <div style={{ width: "100%" }}>
      <Header
        backgroundColor="#510083"
        textColor="#ffffff"
        title="Products"
      ></Header>
      {erro && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20vh",
            fontSize: "25px",
            alignItems: "center",
          }}
        >
          Ocorreu um erro ao buscar os produtos.
          <button
            onClick={getProductList}
            style={{
              fontSize: "20px",
              border: "None",
              padding: "20px 30px",
              marginLeft: "20px",
              borderRadius: "15px",
            }}
          >
            Tente novamente
          </button>
        </div>
      )}
      {!loading && !erro && <Grid list={productList}></Grid>}
    </div>
  );
};

export default Products;
