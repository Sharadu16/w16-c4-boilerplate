import React, { useEffect } from "react";
import { Select } from "./Styled";

export const Products = () => {
  useEffect(() => {
      Data.map((elem) => {
        return (
            <div>
                <h4>{elem.brand}</h4>
                <h4>{elem.title}</h4>
                <img src={elem.image} />
                <p>{elem.category}</p>
                <h4>{elem.price}</h4>
            </div>
        )
        
      })
  }, []);

  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
      </Grid>
    </>
  );
};

export default Products;