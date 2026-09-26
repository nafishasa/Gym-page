"use client";

import React, { useContext, useState } from "react";
import { exerciseContext } from "@/app/context/Context";
import { Idata } from "@/app/type/DataType";
import MyPlanCard from "./MyPlanCard";
import EmptyState from "./Emty";

interface IPart2Props {
  selectedTab: "plan" | "save";
  setSelectedTab: React.Dispatch<
    React.SetStateAction<"plan" | "save">
  >;
}

const Part2 = ({
  selectedTab,
  setSelectedTab,
}: IPart2Props) => {
  const { save, plan, setPlan, setSave } = useContext(
    exerciseContext
  ) as {
    save: Idata[];
    plan: Idata[];
    setPlan: React.Dispatch<React.SetStateAction<Idata[]>>;
    setSave: React.Dispatch<React.SetStateAction<Idata[]>>;
  };

  const [sortBy, setSortBy] = useState<string>("d");

  function sortbook(item: Idata[]) {
    const sortedexercise = [...item];

    if (sortBy === "d") {
      sortedexercise.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "c") {
      sortedexercise.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    } else if (sortBy === "r") {
      sortedexercise.sort((a, b) => b.rating - a.rating);
    }

    return sortedexercise;
  }

  const sortedplan = sortbook(plan);
  const sortedsave = sortbook(save);

  return (
    <div className="pt-5 sm:pt-7">

      {/* Sort */}
      <div className="flex justify-end mb-4 sm:mb-5">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="select select-sm sm:select-md w-full sm:w-auto"
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="d">Duration</option>
          <option value="c">Calories</option>
          <option value="r">Rating</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="w-full">
        <div className="tabs tabs-box w-full">

          {/* Today's Plan */}
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Today's Plan"
            checked={selectedTab === "plan"}
            onChange={() => setSelectedTab("plan")}
          />

          <div className="tab-content bg-base-100 border-base-300 p-3 sm:p-5 md:p-6 w-full">
            <div className="space-y-3 sm:space-y-4">
              {plan.length > 0 ? (
                sortedplan.map((item: Idata) => (
                  <MyPlanCard
                    key={item.id}
                    plan={item}
                    showDoneButton={selectedTab === "plan"}
                    onDelete={(id) => {
                      setPlan((prev) =>
                        prev.filter((item) => item.id !== id)
                      );
                    }}
                  />
                ))
              ) : (
                <EmptyState />
              )}
            </div>
          </div>

          {/* Saved */}
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Saved"
            checked={selectedTab === "save"}
            onChange={() => setSelectedTab("save")}
          />

          <div className="tab-content bg-base-100 border-base-300 p-3 sm:p-5 md:p-6 w-full">
            <div className="space-y-3 sm:space-y-4">
              {save.length > 0 ? (
                sortedsave.map((item: Idata) => (
                  <MyPlanCard
                    key={item.id}
                    plan={item}
                    showDoneButton={selectedTab === "plan"}
                    onDelete={(id) => {
                      setSave((prev) =>
                        prev.filter((item) => item.id !== id)
                      );
                    }}
                  />
                ))
              ) : (
                <EmptyState />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Part2;