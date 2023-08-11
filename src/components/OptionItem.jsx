import { useState } from "react";
import PopupModal from "./PopupModal";
import TodoList from "./TodoList";
const id = 0;
const OptionItem = ({ option, onChangeOptions }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [attributes, setAttributes] = useState([]);
  return (
    <li key={option.id} className="grid grid-cols-6 gap-3 ">
      <div className="flex px-2 py-1.5 col-span-5 border border-solid border-gray-400 rounded-md">
        <h6 className="w-[20%]">{option.text}</h6>
        <ul className="flex gap-2 overflow-x-auto">
          {option.value &&
            option.value.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-xs font-semibold bg-gray-200 rounded-lg p-1  "
                >
                  {item.text}
                </li>
              );
            })}
        </ul>
      </div>
      <div
        onClick={() => setIsAdd(!isAdd)}
        className="relative cursor-pointer duration-200 hover:text-rose-500 flex justify-center items-center border border-solid border-gray-400 rounded-md"
      >
        Att
      </div>
      <PopupModal isPopup={isAdd} setIsPopup={setIsAdd}>
        <TodoList
          options={attributes}
          title={option.text}
          handleAddOption={(id, text) => {
            setAttributes([
              ...attributes,
              {
                id: id++,
                text: text,
              },
            ]);
          }}
          handleDeleteOption={(id) => {
            const newAttributes = attributes.filter((t) => t.id != id);
            setAttributes(newAttributes);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onChangeOptions(option.id, {
              id: option.id,
              text: option.text,
              value: attributes,
            });
          }}
          className="float-right py-1 px-2 bg-blue-600 rounded-xl text-gray-950 font-semibold mt-3 duration-200 "
        >
          Save
        </button>
        <div className="clear-both"></div>
      </PopupModal>
    </li>
  );
};

export default OptionItem;
