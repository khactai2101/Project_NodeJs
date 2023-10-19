import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../../API";
import { IProduct } from "../../../../Types/type";
import { Link } from "react-router-dom";

const Card = () => {
  const [products, setProducts] = useState<any>([]);
  const token = localStorage.getItem("asscessToken");
  useEffect(() => {
    //goi api dde thuc hien chuc nang hien thi tat ca cac san pham
    const data = async () => {
      const allProducts = await getAllProducts(token);
      setProducts(allProducts?.data);
    };
    data();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-pink-200 to-pink-0 flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
          {products?.map((product: any) => (
            <div
              key={product.id}
              className="max-w-[250px] bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src={product?.image[0]?.src}
                    alt="Colors"
                  />
                </div>
              </Link>
              <p className="mt-4 text-gray-800 text-s font-bold cursor-pointer h-[60px]">
                {product?.nameProduct}
              </p>
              <div className="my-4">
                <div className="flex space-x-1 items-center gap-12">
                  <p className="text-red-500">
                    {Number(product?.price).toLocaleString()} VNĐ
                  </p>
                </div>
                <Link to={`/product/${product.id}`}>
                  <div className="">
                    <button className="mt-4 text-m w-full text-white bg-pink-300 py-2 rounded-xl shadow-lg hover:bg-pink-400 transition-colors duration-500">
                      Chi tiết
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
