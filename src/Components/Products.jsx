import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
//   const [token, setToken] = useState("");
  const fetchInfo = async () => {
    debugger;
    // setToken(location.state.token)
    // console.log(location.state.token, "logintoken");
    // console.log(location.state.token, "logintoken");
    console.log(location.state,"token")
    const response = await fetch("https://dummyjson.com/auth/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${location.state}`, // Include the token in the Authorization header
        "Content-Type": "application/json",
        // Other headers as needed
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products, "responseData");
        setProducts(data.products); // Update state with the fetched data
      });
  };
  useEffect(() => {
    debugger;
    console.log(location, "responselogin");
    fetchInfo();
  }, []);
  return (
    <>
      <div class="container my-4">
        <div class="grid grid-cols-3 gap-4">
          {products.map((ele) => {
            return (
              <div className="max-w-lg rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <img
                    className="w-full"
                    src={ele.thumbnail}
                    alt="Sunset in the mountains"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="px-6 py-2">
                  <Link
                    className="font-bold text-xl mb-2"
                    style={{ cursor: "pointer" }}
                  >
                    {ele.title}
                  </Link>
                  <p className="text-gray-700 text-base truncate ">
                    {ele.description}
                  </p>
                </div>
                <div className="px-6 py-2">
                  <div className="flex">
                    <div className="font-bold text-xl mb-2  flex-1">
                      ₹ {ele.price}
                    </div>
                    <p className="text-gray-700 text-base  flex-1">
                      {ele.discountPercentage}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-gray-700 text-base flex-1">
                      {ele.brand}
                    </p>
                    <p className="text-gray-700 text-base flex-1">
                      {ele.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
