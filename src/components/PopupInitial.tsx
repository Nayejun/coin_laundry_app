import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PopupInitial: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="relative ml-20">
      {showPopup && (
        <div className="absolute text-label-1-reading bottom-0 left-3/4 transform -translate-x-1/2 mt-2 w-[140px] h-[34px] bg-teal-500 text-white rounded-lg shadow-lg flex items-center justify-between px-1 z-10">
          <span className="ml-auto">처음 오셨어요?</span>
          <button
            className="w-4 h-4 flex items-center justify-center ml-2"
            onClick={() => setShowPopup(false)}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-white"
              style={{ fontSize: "12px" }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default PopupInitial;
