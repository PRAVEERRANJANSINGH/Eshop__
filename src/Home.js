import React from "react";
import  Product from "./Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_container"></div>
      <img src="https://cdn.sanity.io/images/599r6htc/regionalized/d36fe8caf003803652e4b38fabf256fb19a82b41-810x810.png" alt="Description" className="home_image" />
      <div className="home_row">
        <Product 
        id ="123456"
        title="Product 1"
        price={<span>$19.99</span>}
        rating={5}
        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDPE3Vai-prZZHue3vlRFOQUFdlMxeQRvNT5NeTiFlpd1Ks4la3ORKqaLhqUAAfbYgozThpye7C23Bci-gnj3gCRQaAP3D0vPFTvRbhGE6Iqqqui0JNdQz7g"
        />
        <Product 
        id ="123457"
        title="Product 2"
        price={<span>$29.99</span>}
        rating={4}
        image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvPOUPXoS2OBcnPr0Gfph3PEkdhvHBYOiQRTpECtniH9sCuNSHpfhU_ejHtyihrqeY4qPhSFDOUeD9_UarIS61CVx6iKP1Frh0WOfO3T1O7YZgwqZmHDHOPDk"
        />
        <Product 
        id ="123458"
        title="Product 3"
        price={<span>$39.99</span>}
        rating={3}
        image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkraQofbfmvs_uVoWzqyzmHa9dMrT9rzAv_MGTfCdJ_FvFrlPyOpGq8RnGOr252dAczgLec7bq0txfeDRYZ8Np-7E2Li5DHVYc0AgycONeXQxzejBM5cxFRw"
        />

      </div>

      <div className="home_row">
        <Product
        id ="123459"
        title="Product 4"
        price={<span>$49.99</span>}
        rating={2}
        image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6xwpsZ6mMYMnQCZjift8P318tqNN1wyCOP1-Re78HWNtu34KRD5aqOZJ3ewEUwNBBip7RF0Yh38_IuIgwX94Q1GbBxzcOL01rwu1dHXCg9wWkx9_GmAMv"
        />
        <Product
        id ="123460"
        title="Product 5"
        price={<span>$59.99</span>}
        rating={1}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBJqM6lvK0Nqb1Qw-IbnYVX2t4_-cjuvuu_OZQUVMs8Wo_ZsIZPtu00L1T9sxbafU27U&usqp=CAU"
        />
        <Product
        id ="123461"
        title="Product 6"
        price={<span>$69.99</span>}
        rating={5}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiww5P2LiJv9FVLJpaj_E3pX4y80eVlOZRfR5jNuuOWQ8BO26V00hP1hdEZiHCE-Qvbc&usqp=CAU"
        />
      </div>
      <div className="home_row">
        <Product
        id ="123462"
        title="Product 7"
        price={<span>$79.99</span>}
        rating={4}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EDvCr9GQcZKj_xZw89u3s_PJSg0ZXjcndwgaV7rO79Nu3qhhn5QAKGXS63pT_ZVL1P4&usqp=CAU"
        
         />
        
      </div>
    </div>
  );
}

export default Home;

