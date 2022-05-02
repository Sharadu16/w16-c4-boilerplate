// import styled from "styled-components";

export const Navbar = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#8000ff", padding: 10 }}>
         <div style={{display:"flex", justifyContent:"space-evenly", color:"white"}}>
            <h4 style={{color:"black"}}>Home</h4>
            <h4>About</h4>
            <h4 href="./Products">Products</h4>
            <h4>Mens</h4>
            <h4>Womens</h4>
            <h4>Kids</h4>
            <h4>Home decor</h4>
         </div>
     
      </nav>
      
    </>
    
  );
};

export default Navbar;