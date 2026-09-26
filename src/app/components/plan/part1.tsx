"use client";

import { useContext, useState } from "react";
import Part2 from "./part2";
import { exerciseContext } from "@/app/context/Context";
import { Idata } from "@/app/type/DataType";

const Part1 = () => {
  const { save, plan, active } = useContext(exerciseContext) as {
    save: Idata[];
    active: string;
    plan: Idata[];
  };

  const [selectedTab, setSelectedTab] = useState<"plan" | "save">("plan");

  const totalMinutesPlan = plan.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCaloriesPlan = plan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  const totalMinutesSave = save.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCaloriesSave = save.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-7">
      <div>

        {/* Title & Subtitle */}
        <div className="mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white">
            {active === "My Plan" ||
            active === "Workout" ||
            active === "plan"
              ? "MY PLAN"
              : "Saved"}
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Box */}
        <div
          className="
            grid
            grid-cols-3
            bg-[#111622]
            rounded-xl sm:rounded-2xl
            border border-slate-800
            p-4 sm:p-6
            divide-x divide-slate-800/80
          "
        >

          {/* Exercises */}
          <div className="flex flex-col justify-center px-2 sm:px-0 sm:pr-4">
            <span className="text-gray-400 text-[9px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2">
              Exercises
            </span>

            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#ccff00]">
              {selectedTab === "plan" ? plan.length : save.length}
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col justify-center px-2 sm:px-6">
            <span className="text-gray-400 text-[9px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2">
              Minutes
            </span>

            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white">
              {selectedTab === "plan"
                ? totalMinutesPlan
                : totalMinutesSave}
            </span>
          </div>

          {/* Calories */}
          <div className="flex flex-col justify-center px-2 sm:pl-6">
            <span className="text-gray-400 text-[9px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2">
              Calories
            </span>

            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white">
              {selectedTab === "plan"
                ? totalCaloriesPlan
                : totalCaloriesSave}
            </span>
          </div>

        </div>

        {/* Part2 */}
        <div>
          <Part2
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>

      </div>
    </div>
  );
};

export default Part1;