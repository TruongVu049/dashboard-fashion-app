import { GrFormAdd } from "react-icons/gr";
import PopupModal from "./PopupModal";
import TodoList from "./TodoList";
import { useState } from "react";
import { VariantsForm } from "./VariantsForm";
let id = 1;
const AddOption = ({ options, setOptions }) => {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="block text-sm font-medium leading-6 text-gray-900">
          Variants
        </h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsPopup(!isPopup);
          }}
          className="flex items-center uppercase text-sm text-gray-900
          bg-gray-200 rounded-xl px-1 py-1.5 duration-200 hover:bg-gray-700 hover:text-white"
        >
          <GrFormAdd className="hover:text-white" />
          add variants
        </button>
      </div>
      <PopupModal isPopup={isPopup} setIsPopup={setIsPopup}>
        <VariantsForm
          onAddOption={(option) => {
            setOptions([
              ...options,
              {
                id: id++,
                value: option,
              },
            ]);
          }}
          onSaveOption={() => {
            setIsPopup(!isPopup);
          }}
        />
      </PopupModal>
    </>
  );
};

export default AddOption;
