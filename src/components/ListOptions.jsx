import { BsThreeDotsVertical } from "react-icons/bs";
import PopupModal from "./PopupModal";
import OptionItem from "./OptionItem";
import { BsTrash } from "react-icons/bs";
const ListOptions = ({ options, setOptions }) => {
  console.log("list options", options);
  return (
    <div className="overflow-x-auto">
      {options && (
        <table className="w-full  mt-3 text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-900 uppercase bg-gray-300 ">
            <tr>
              <th className=" py-3 text-center">ID</th>
              <th className=" py-3 text-center">Color</th>
              <th className=" py-3 text-center">Size</th>
              <th className=" py-3 text-center">Số lượng</th>
              <th className=" py-3 text-center">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option) => {
              return (
                <tr
                  key={option.id}
                  className={`bg-gray-50 text-gray-900 border-b border-gray-200 hover:bg-gray-100  
            `}
                >
                  <th
                    scope="row"
                    className="text-center
          px-6 py-4 font-medium text-gray-900 "
                  >
                    <h4 className="line-clamp-2">{option.id}</h4>
                  </th>
                  <td className="px-6 py-4 text-gray-900 text-center">
                    <h4 className="capitalize text-center">
                      {option.value.color}
                    </h4>
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-center">
                    <h4 className="capitalize text-center">
                      {option.value.size}
                    </h4>
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-center">
                    <h4 className="capitalize text-center">
                      {option.value.quantity}
                    </h4>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => {
                        const newOptions = options.filter((item) => {
                          return item.id != option.id;
                        });
                        setOptions(newOptions);
                      }}
                      className="font-medium text-gray-900 hover:text-rose-500 "
                    >
                      <BsTrash className="text-xl" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListOptions;
