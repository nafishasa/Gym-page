"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { exerciseContext } from "../context/Context";

const Navbarbtn = () => {
  const { active, setActive } = useContext(exerciseContext) as {
    active: string;
    setActive: (active: string) => void;
  };

  return (
    <div className="flex justify-between">
      <li>
        <Link
          href="/"
          onClick={() => setActive("Workout")}
          className={active === "Workout" ? "text-[#c2f800] bg-[#1a2312] py-2 px-7 rounded-2xl" : ""}
        >
          Workout
        </Link>
      </li>

      <li>
        <Link
          href="/plan"
          onClick={() => setActive("My Plan")}
          className={active === "My Plan" ? "text-[#c2f800] bg-[#1a2312] py-2 px-7 rounded-2xl" : ""}
        >
          My Plan
        </Link>
      </li>
    </div>
  );
};

export default Navbarbtn;