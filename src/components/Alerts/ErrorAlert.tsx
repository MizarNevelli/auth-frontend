"use client";
import { SettingsContext } from "@/SettingContext";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const ErrorAlert = ({ error }: { error: string }) => {
  const { setError } = useContext(SettingsContext);

  return (
    <div className="w-screen h-screen flex items-center justify-center absolute bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden max-w-[98%]">
        <div className="flex justify-between items-center bg-red-200 border-red-600 border-bottom p-5 text-red-800 text-lg font-semibold">
          <p>Attention!</p>
          <AiOutlineClose
            onClick={() => {
              setError(null);
            }}
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        <p className="py-8 px-5">{error}</p>
      </div>
    </div>
  );
};
