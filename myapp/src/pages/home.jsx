import Button from "../Components/button";
import ProductCard from "../Components/productCard";
import React from "react";

const Home = () => {
    const handleLogin = () => {
        alert("Login button clicked!");
    }

    const handleSignup = () => {
        alert("Signup button clicked!");
    }

    const handleAddToCart = (productName) => {
        alert(`${productName} added to cart!`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome to the Home Page</h1>
            <div style={{ alignItems: "right", display: "flex", gap: "10px", marginBottom: "20px" }}>
                <Button text="Products" onClick={handleLogin} />
                <Button text="Home" onClick={handleSignup} />
            </div>
            <div style={{ marginBottom: "20px", alignItems: "center", gap: "10px" }}>
                <Button text="Login" onClick={handleLogin} />
                <Button text="Signup" onClick={handleSignup} />

                <hr />
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <ProductCard
                    name="Product 1"
                    price={29.99}
                    onAddToCart={() => handleAddToCart("Product 1")}
                />
                <ProductCard
                    name="Product 2"
                    price={49.99}
                    onAddToCart={() => handleAddToCart("Product 2")}
                />
                <ProductCard
                    name="Product 3"
                    price={19.99}
                    onAddToCart={() => handleAddToCart("Product 3")}
                />
            </div>
        </div>
    );
};

export default Home;

// const Home = () => {


//   const handleAddToCart = (productName) => {
//     alert(`${productName} added to cart!`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Welcome to the Home Page</h1>
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         <ProductCard
//           name="Product 1"
//           price={29.99}
//           onAddToCart={() => handleAddToCart("Product 1")}
//         />
//         <ProductCard
//           name="Product 2"
//           price={49.99}
//           onAddToCart={() => handleAddToCart("Product 2")}
//         />
//         <ProductCard
//           name="Product 3"
//           price={19.99}
//           onAddToCart={() => handleAddToCart("Product 3")}
//         />
//       </div>
//      }
