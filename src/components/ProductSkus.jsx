import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
const ProductSkus = () => {
  return (
    <table className="w-full  mt-3 text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-900 uppercase bg-gray-300 ">
        <tr>
          <th className=" py-3 text-center">ID</th>
          <th className=" py-3">Color</th>
          <th className=" py-3 text-center">Size</th>
          <th className=" py-3 text-center">Số lượng</th>
          <th className=" py-3">Xóa</th>
        </tr>
      </thead>
      <tbody>
        <tr
          className={`bg-gray-50 text-gray-900 border-b border-gray-200 hover:bg-gray-100  
            `}
        >
          <th
            scope="row"
            className="
          px-6 py-4 font-medium text-gray-900 "
          >
            <h4 className=" line-clamp-2">{"item.product_name"}</h4>
          </th>
          <td className="px-6 py-4 text-gray-900 text-center">
            <h4 className="capitalize text-center">{"item.cat_id"}</h4>
          </td>
          <td className="px-6 py-4 text-gray-900 text-center">
            <h4 className="capitalize text-center">{"item.brand"}</h4>
          </td>
          <td className="px-6 py-4 text-center text-gray-900">
            <strong>
              <span>{"item.price"}</span> VND
            </strong>
          </td>

          <td className="px-6 py-4">
            <button className="font-medium text-gray-900 hover:text-rose-500">
              <BsTrash className="text-xl" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductSkus;
