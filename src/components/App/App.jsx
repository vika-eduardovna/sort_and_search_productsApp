import { useState, useEffect } from "react";
import { Context } from "../../context";
import AddForm from "../../pages/AddForm";
import ListProducts from "../../pages/ListProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(products);
  const [searchWord, setSearchWord] = useState('')

  const searchProduct = () => {
    const filtered_products = products.filter(product => product.title.toLowerCase().startsWith(searchWord.toLowerCase()));
    setShowProducts(filtered_products)
  };
  
  useEffect(searchProduct, [products, searchWord]);

  const addProduct = (title, price, discount) => {
   setProducts([...products,
  {
    id: Date.now(),
    title, price, discount
  }
    ]);
  };
  
  
  return (
    <Context.Provider value={{addProduct, showProducts, searchProduct, setSearchWord}}>
      <AddForm/>
      <ListProducts/>
    </Context.Provider>
  );
}

export default App;
