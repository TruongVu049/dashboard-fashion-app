import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddOption from "./AddOption";
import ListOptions from "./ListOptions";
import ProductSkus from "./ProductSkus";

const ProductVariants = ({ options, setOptions }) => {
  return (
    <>
      <div className="sm:col-span-6 ">
        <div>
          <AddOption options={options} setOptions={setOptions} />
          <ListOptions options={options} setOptions={setOptions} />
        </div>
      </div>
    </>
  );
};

export default ProductVariants;
