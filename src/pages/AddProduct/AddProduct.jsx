import React, { useState, useEffect } from "react";
import { UploadImg, TodoList, ProductVariants } from "../../components";
import axios from "axios";
const AddProduct = () => {
  const [imgList, setImgList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [options, setOptions] = useState([]);
  console.log(options);
  useEffect(() => {
    console.log("useEffect");
    axios
      .get("http://localhost:5000/api/category")
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const product = {
      cat_id: formJson.category,
      product_name: formJson.name,
      product_desc: formJson.desc,
      images: imgList.join("@"),
      brand: formJson.brand,
      price: parseInt(formJson.price),
      sex: formJson.sex,
      options: options,
    };
    axios
      .post("http://localhost:5000/api/product", product)
      .then((res) => {
        console.log("added");
        window.location.href = "/product";
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="p-4 sm:ml-64 mt-[64px]">
      <div className="p-4 border-[2px] shadow-2xl border-gray-300 border-solid rounded-lg">
        {/* head */}
        <div className="text-gray-900">
          <h2 className="font-semibold sm:text-2xl text-xl ">Thêm sản phẩm</h2>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên sản phẩm
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mô tả
                  </label>
                  <div className="mt-2">
                    <input
                      id="desc"
                      name="desc"
                      type="desc"
                      autoComplete="desc"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Giá tiền
                  </label>
                  <div className="mt-2">
                    <input
                      id="price"
                      name="price"
                      type="price"
                      autoComplete="price"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Thương hiệu
                  </label>
                  <div className="mt-2">
                    <input
                      id="brand"
                      name="brand"
                      type="brand"
                      autoComplete="brand"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Danh mục
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      name="category"
                      autoComplete="category-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {categoryList &&
                        categoryList.map((item, index) => {
                          return (
                            <option key={item.cat_id} value={item.cat_id}>
                              {item.cat_name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="sex"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Giới tính
                  </label>
                  <div className="mt-2">
                    <select
                      id="sex"
                      name="sex"
                      autoComplete="sex-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={"unisex"} defaultChecked>
                        Unisex
                      </option>
                      <option value={"male"}>Nam</option>
                      <option value={"female"}>Nữ</option>
                    </select>
                  </div>
                </div>

                <ProductVariants options={options} setOptions={setOptions} />

                <UploadImg
                  title={"Ảnh 1"}
                  imgIndex={0}
                  imgList={imgList}
                  setImgList={setImgList}
                />
                <UploadImg
                  title={"Ảnh 2"}
                  imgIndex={1}
                  imgList={imgList}
                  setImgList={setImgList}
                />
                <UploadImg
                  title={"Ảnh 3"}
                  imgList={imgList}
                  imgIndex={2}
                  setImgList={setImgList}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
