"use client";
import { SettingsContext } from "@/SettingContext";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const SuccessAlert = ({ msg }: { msg: string }) => {
  const { setSuccess } = useContext(SettingsContext);

  return (
    <div className="w-screen h-screen flex items-center justify-center absolute bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden max-w-[98%]">
        <div className="flex justify-between items-center bg-green-200 border-green-600 border-bottom p-5 text-green-800 text-lg font-semibold">
          <p>Congratulations!</p>
          <AiOutlineClose
            onClick={() => {
              setSuccess(null);
            }}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <p className="py-8 px-5">{msg}</p>
      </div>
    </div>
  );
};
