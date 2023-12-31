import { FaXmark } from "react-icons/fa6";
const PopupModal = ({ isPopup, setIsPopup, children }) => {
  return (
    <div
      className={`${isPopup ? "block" : "hidden"}
    fixed top-0 left-0 bottom-0 right-0 z-[999]  w-full bg-[rgba(0,0,0,0.5)]  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="rounded-lg relative p-3 z-[999] w-full max-w-md max-h-full bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <div
          className="cursor-pointer float-right"
          onClick={() => setIsPopup(!isPopup)}
        >
          <FaXmark />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopupModal;
