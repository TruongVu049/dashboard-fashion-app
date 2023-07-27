import { useState } from "react";

const TodoList = ({ name, dataList, onSetValue }) => {
  const [input, setInput] = useState("");

  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={name}
        className="block capitalize text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="mt-2 border-b border-solid border-gray-300 pb-2">
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            name={name}
            onChange={(e) => setInput(e.target.value)}
            id={name}
            value={input}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                const inputTrim = input.trim();
                console.log(inputTrim, inputTrim.length);
                onSetValue(inputTrim);
              }
            }}
            autoComplete="address-level1"
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              onSetValue(input.trim());
              setInput("");
            }}
            className="text-sm font-semibold py-2 px-2 rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-800 hover:text-white"
          >
            Thêm
          </button>
        </div>
        <ul>
          {dataList &&
            dataList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
