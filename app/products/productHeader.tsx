import Link from "next/link";
import React from "react";

const ProductHeader = () => {
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  return (
    <div className="flex justify-center p-4">
      <select className="select select-accent w-full max-w-xs">
        <option disabled selected>
          Categories
        </option>
        {categories.map((category) => (
          <option key={category}>
            <a href={`/products?sortOrder=${category}`}>{category}</a>
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductHeader;
