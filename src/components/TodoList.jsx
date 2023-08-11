import { useState } from "react";
let id = 0;
const TodoList = ({ options, handleAddOption, handleDeleteOption, title }) => {
  const [text, setText] = useState("");

  return (
    <div className="">
      <h4 className="text-base font-semibold text-gray-900">{title}</h4>
      <label
        htmlFor="text"
        className="block capitalize text-sm font-medium leading-6 text-gray-900"
      ></label>
      <div className="mt-2 border-b border-solid border-gray-300 pb-2">
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            id="text"
            value={text}
            autoComplete="address-level1"
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddOption(id++, text);
              setText("");
            }}
            className="text-sm font-semibold py-2 px-2 rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-800 hover:text-white"
          >
            Thêm
          </button>
        </div>
        <ul className="font-semibold">
          List Option
          {options &&
            options.map((item, index) => {
              return (
                <li key={index} className="flex justify-between">
                  {item.text}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteOption(item.id);
                    }}
                  >
                    delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
