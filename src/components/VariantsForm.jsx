import React, { useState } from "react";

export const VariantsForm = ({ onAddOption, onSaveOption }) => {
  const [data, setData] = useState({
    color: "",
    size: "",
    quantity: 1,
  });

  return (
    <div>
      <form className="space-y-6">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Variant
        </h2>
        <div>
          <div className="flex items-center justify-between duration-300 ease-linear">
            <label
              htmlFor="variant-color"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Color
            </label>
          </div>
          <div className="mt-2">
            <input
              id="variant-color"
              name="variant-color"
              type="variant-color"
              autoComplete="variant-color"
              value={data.color}
              onChange={(e) => {
                setData({
                  ...data,
                  color: e.target.value,
                });
              }}
              required
              className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                        
                        `}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between duration-300 ease-linear">
            <label
              htmlFor="variant-size"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Size
            </label>
          </div>
          <div className="mt-2">
            <input
              id="variant-size"
              name="variant-size"
              type="variant-size"
              value={data.size}
              onChange={(e) => {
                setData({
                  ...data,
                  size: e.target.value,
                });
              }}
              autoComplete="variant-size"
              required
              className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                        
                        `}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between duration-300 ease-linear">
            <label
              htmlFor="variant-quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quantity
            </label>
          </div>
          <div className="mt-2">
            <input
              id="variant-quantity"
              name="variant-quantity"
              type="variant-quantity"
              value={data.quantity}
              onChange={(e) => {
                setData({
                  ...data,
                  quantity: e.target.value,
                });
              }}
              autoComplete="variant-quantity"
              required
              className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                        
                        `}
            />
          </div>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddOption(data);
              onSaveOption();
            }}
            className="
                  bg-violet-400 duration-200 hover:bg-violet-500
                  flex w-full justify-center rounded-md text-neutral-950   py-2  text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
