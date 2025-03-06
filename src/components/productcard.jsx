// write product card here
import React from "react";
import Button from "../components/button"; // Importing the Button component

const ProductCard = () => {
  // Static product details
  const productImage ="../photo/download.jpeg"; // Dummy product image
  const productName = "Dodge Challenger Black Ghost";
  const productPrice = "$155,215";

  // Handle button click
  const handleViewProduct = () => {
    alert(`Viewing details for ${productName}`);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 w-64 bg-white">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-3">
        <Button text="View Product" onClick={handleViewProduct} />
      </div>
    </div>
  );
};

export default ProductCard;
