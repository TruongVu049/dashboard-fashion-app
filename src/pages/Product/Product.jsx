import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
const Product = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDeleteProduct(productId) {
    axios
      .delete(`http://localhost:5000/api/product/${productId}`)
      .then((res) => {})
      .catch((err) => console.log(err));
  }

  console.log(productList);

  return (
    <div className="p-4 sm:ml-64 mt-[64px]">
      <div className="p-4 border-[2px] shadow-2xl border-gray-300 border-solid rounded-lg">
        {/* head */}
        <div className="text-gray-900">
          <h2 className="font-semibold sm:text-2xl text-xl ">All Products</h2>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex  items-center gap-x-3">
            <input
              placeholder="Search"
              className="inline-block border border-solid border-gray-300 rounded-lg px-3 py-1"
            />
            <BsTrash className="text-xl hover:text-rose-500" />
          </div>
          <div>
            <Link to={"/addProduct"}>
              <button className="flex items-center rounded-lg bg-gray-300 text-gray-950 py-2 font-semibold px-4 hover:bg-gray-800 hover:text-gray-50">
                <IoIosAdd className="text-lg font-semibold pr-1" />
                Thêm sản phẩm
              </button>
            </Link>
          </div>
        </div>
        {/* table */}
        <div className="relative overflow-x-auto border border-solid border-gray-200 sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-900 uppercase bg-gray-300 ">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center invisible">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:rinbg-gray-300 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Ảnh
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên Sản Phẩm
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Danh Mục
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Thương Hiệu
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Tổng
                </th>
                <th scope="col" className="px-6 py-3">
                  Sửa
                </th>
                <th scope="col" className="px-6 py-3">
                  Xóa
                </th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, index) => {
                return (
                  <tr
                    key={item.product_id}
                    className={`bg-gray-50 text-gray-900 border-b border-gray-200 hover:bg-gray-100  
                    
                    `}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:rinbg-gray-300 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-1">
                      <img
                        className="w-20"
                        src={item["images"].split("@")[0]}
                        alt="image"
                      />
                    </td>
                    <th
                      scope="row"
                      className="
                  px-6 py-4 font-medium text-gray-900 "
                    >
                      <h4 className=" line-clamp-2">{item.product_name}</h4>
                    </th>
                    <td className="px-6 py-4 text-gray-900 text-center">
                      <h4 className="capitalize text-center">{item.cat_id}</h4>
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-center">
                      <h4 className="capitalize text-center">{item.brand}</h4>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-900">
                      <strong>
                        <span>{item.price}</span> VND
                      </strong>
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        to={`/edit/${item.product_id}`}
                        className="font-medium text-gray-900 hover:text-rose-500"
                      >
                        <BiEdit className="text-xl" />
                      </Link>
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          console.log(item.product_id);
                          handleDeleteProduct(item.product_id);
                        }}
                        className="font-medium text-gray-900 hover:text-rose-500"
                      >
                        <BsTrash className="text-xl" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
