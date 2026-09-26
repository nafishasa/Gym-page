"use client";

import { exerciseContext } from "@/app/context/Context";
import { Idata } from "@/app/type/DataType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface Icardbtn {
  exercise: Idata;
}

const Cardbtn = ({ exercise }: Icardbtn) => {
  const { save, setSave, plan, setPlan } = useContext(exerciseContext) as {
    save: Idata[];
    setSave: React.Dispatch<React.SetStateAction<Idata[]>>;
    plan: Idata[];
    setPlan: React.Dispatch<React.SetStateAction<Idata[]>>;
  };

  const findsave = save.some(
    (item: Idata) => item.id === exercise.id
  );

  const findplan = plan.some(
    (item: Idata) => item.id === exercise.id
  );

  function handlsave() {
    if (findsave) {
      toast.warning(`${exercise.name} you have already saved!`);
      return;
    }

    setSave([...save, exercise]);
  }

  function handlplan() {
    if (findplan) {
      toast.warning(`${exercise.name} you have already planed!`);
      return;
    }

    setPlan([...plan, exercise]);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <button
        onClick={handlplan}
        className="w-full sm:w-auto flex items-center justify-center gap-2
        bg-[#ccff00] hover:bg-[#b3e600]
        text-black font-extrabold text-xs uppercase
        px-5 sm:px-6 py-3.5 rounded-xl
        transition-all"
      >
        <span>Add to today&apos;s plan</span>
      </button>

      <button
        onClick={handlsave}
        className="w-full sm:w-auto flex items-center justify-center gap-2
        bg-[#111622] hover:bg-slate-800
        text-white border border-slate-700
        font-semibold text-xs uppercase
        px-5 sm:px-6 py-3.5 rounded-xl
        transition-all"
      >
        <span>Save for later</span>
      </button>
    </div>
  );
};

export default Cardbtn;