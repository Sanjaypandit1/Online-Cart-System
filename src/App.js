import React, { useState } from "react";
import Navbar from "./Component/Navbar"; // Ensure the path is correct
import ProductList from "./Component/ProductList";
import Footer from "./Component/Footer";
import AddItem from "./Component/AddItem";

function App() {
  const initialProductList = [
    {
      price: 180000,
      name: "Iphone 14 pro",
      quantity: 0,
    },
    {
      price: 25000,
      name: "Redmi Note 10",
      quantity: 0,
    },
    {
      price: 150000,
      name: "Macbook M1 air",
      quantity: 0,
    },
    {
      price: 50000,
      name: "Dell Laptop",
      quantity: 0,
    },
  ];

  let [products, setProducts] = useState(initialProductList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  };

  const handleReset = () => {
    // Reset quantities and total amount
    let resetProductList = products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProducts(resetProductList);
    setTotalAmount(0);
  };

  const handlePayNow = () => {
    alert("Proceeding to payment...");
    // Add your payment handling logic here
  };

  const removeItem = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1); // Corrected index here

    setProducts(newProductList); // Corrected state variable here
    setTotalAmount(newTotalAmount);
  };

 const addItem = (name,price) =>{
  let newProductList = [...products];
  newProductList.push({
    price: price,
    name: name,
    quantity:0

  });
  setProducts(newProductList); // Corrected state variable here
 
 }





  return (
    <>
      <Navbar /> {/* This renders the Navbar component */}
      <main className="container mt-5">
        <AddItem addItem = {addItem} />

        <ProductList
          productList={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer
        totalAmount={totalAmount}
        onReset={handleReset} // Pass the handleReset function
        onPayNow={handlePayNow} // Pass the handlePayNow function
      />
    </>
  );
}

export default App;
