"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { exerciseContext } from "../context/Context";
import { Idata } from "../type/DataType";

const Navbtn2 = () => {
      const { active, setActive ,save,plan} = useContext(exerciseContext) as {
        active: string;
        setActive: (value: string) => void;
        save:Idata[]
        plan:Idata[]
      };
    return (
  <div className="flex items-center gap-2">

  {/* Plan */}
  <Link
    href="/plan"
    onClick={() => setActive("plan")}
    className={
      active === "plan"
        ? "flex items-center gap-2 bg-[#1a2312] text-white px-4 py-2 rounded-2xl"
        : "flex items-center gap-2 text-gray-300 px-4 py-2 rounded-2xl"
    }
  >
    <span>Plan</span>

    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c2f800] text-black text-xs font-bold">
      {plan.length}
    </span>
  </Link>


  {/* Saved */}
  <Link
    href="/plan"
    onClick={() => setActive("t")}
    className={
      active === "t"
        ? "flex items-center gap-2 bg-[#1a2312] text-white px-4 py-2 rounded-2xl"
        : "flex items-center gap-2 text-gray-400 px-4 py-2 rounded-2xl"
    }
  >
    <span>Saved</span>

    <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-600 text-gray-400 text-xs font-bold">
     {save.length}
    </span>
  </Link>

</div>
    );
};

export default Navbtn2;