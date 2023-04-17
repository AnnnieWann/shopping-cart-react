import React from "react";

export default function ProgressControl({
  onLeftClick,
  onRightClick,
  leftButton,
  rightButton,
  display,
  type,
}) {
  return (
    <div className="flex flex-row my-6">
      <button
        type="button"
        onClick={onLeftClick}
        className={`w-1/3 hover:bg-[#F67599] hover:text-white rounded-lg text-sm py-3 px-12 ${display}`}
      >
        {leftButton}
      </button>
      <button
        type={type}
        onClick={onRightClick}
        className="w-1/3 hover:bg-[#F67599] hover:text-white rounded-lg text-sm py-3 px-12 ml-auto"
      >
        {rightButton}
      </button>
    </div>
  );
}
