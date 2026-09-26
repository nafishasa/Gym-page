import React from "react";
import Image from "next/image";
import { Idata } from "../type/DataType";
import Cardbtn from "../components/plan/cardbtn";

const getData = async (): Promise<Idata[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

interface Iparams {
  params: Promise<{ id: string }>;
}

const DetailsPage = async ({ params }: Iparams) => {
  const data = await getData();
  const { id } = await params;

  const exercise = data.find((item) => item.id === Number(id));

  if (!exercise) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4 text-white">
        <h2 className="text-xl">Exercise not found!</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f17] text-white min-h-screen px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        
        {/* Left Side: Image */}
        <div className="relative w-full aspect-square max-w-2xl mx-auto lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-800 border border-slate-800">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-5 sm:space-y-6">

          {/* Title & Description */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide text-white leading-tight">
              {exercise.name}
            </h1>

            <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
              {exercise.description}
            </p>
          </div>

          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2">
            {exercise.muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="px-3 py-1.5 sm:px-3.5 sm:py-1 bg-[#ccff00] text-black font-bold text-[10px] sm:text-xs uppercase rounded-full tracking-wider"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="bg-[#111622] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-800/80 divide-y divide-slate-800/60 text-sm">
            
            <div className="flex justify-between items-center gap-4 py-3 px-2">
              <span className="text-gray-400 uppercase font-semibold text-[10px] sm:text-xs tracking-wider">
                EQUIPMENT
              </span>
              <span className="font-semibold text-white text-right break-words">
                {exercise.equipment}
              </span>
            </div>

            <div className="flex justify-between items-center gap-4 py-3 px-2">
              <span className="text-gray-400 uppercase font-semibold text-[10px] sm:text-xs tracking-wider">
                DIFFICULTY
              </span>
              <span className="font-semibold text-white text-right">
                {exercise.difficulty}
              </span>
            </div>

            <div className="flex justify-between items-center gap-4 py-3 px-2">
              <span className="text-gray-400 uppercase font-semibold text-[10px] sm:text-xs tracking-wider">
                SETS
              </span>
              <span className="font-semibold text-white">
                {exercise.sets}
              </span>
            </div>

            <div className="flex justify-between items-center gap-4 py-3 px-2">
              <span className="text-gray-400 uppercase font-semibold text-[10px] sm:text-xs tracking-wider">
                REPS
              </span>
              <span className="font-semibold text-white">
                {exercise.reps}
              </span>
            </div>

            <div className="flex justify-between items-center gap-4 py-3 px-2">
              <span className="text-gray-400 uppercase font-semibold text-[10px] sm:text-xs tracking-wider">
                DURATION
              </span>
              <span className="font-semibold text-white">
                {exercise.duration} min
              </span>
            </div>

            <div className="flex justify-between items-center gap-4 py-3 px-2">
              <span className="text-gray-400 uppercase font-semibold text-[10px] sm:text-xs tracking-wider">
                CALORIES
              </span>
              <span className="font-semibold text-white">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between items-center gap-4 py-3 px-2">
              <span className="text-gray-400 uppercase font-semibold text-[10px] sm:text-xs tracking-wider">
                RATING
              </span>
              <span className="font-semibold text-white">
                {exercise.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-3 pt-1 sm:pt-2">
            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white">
              INSTRUCTIONS
            </h3>

            <ol className="space-y-2 text-sm text-gray-300">
              {exercise.instructions?.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-2 leading-relaxed"
                >
                  <span className="font-bold text-gray-400 shrink-0">
                    {index + 1}.
                  </span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <Cardbtn exercise={exercise} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;