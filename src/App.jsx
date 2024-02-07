import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const baseUrl = "https://fakestoreapi.com/products";
  const instance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    timeout: 1000,
    headers: { "Secret-Custom-Header": "token" },
  });

  useEffect(() => {
    instance
      .get()
      .then(function (response) {
        setProducts(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (products.length < 1) return <p>Loading...</p>;

  return (
    <>
      <div>
        <p>{products[0].title}</p>
      </div>
    </>
  );
}

export default App;
