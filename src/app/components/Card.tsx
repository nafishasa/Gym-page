import React from "react";
import Image from "next/image";
import { Idata } from "../type/DataType";
import Link from "next/link";

interface Iexecise {
  exercise: Idata;
}

const ExerciseCard = ({ exercise }: Iexecise) => {
  const { id } = exercise;

  return (
    <Link href={`/${id}`} className="block h-full">
      <div
        className="
          h-full
          rounded-2xl
          bg-[#111827]
          text-white
          overflow-hidden
          shadow-lg
          border border-slate-800
          hover:border-slate-600
          hover:-translate-y-1
          transition-all
          duration-200
        "
      >
        {/* Top Image Section */}
        <div
          className="
            relative
            h-44
            sm:h-48
            md:h-52
            w-full
          "
        >
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Card Content Section */}
        <div className="p-4 sm:p-5">

          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {exercise.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="
                  px-2.5
                  sm:px-3
                  py-1
                  bg-[#ccff00]
                  text-black
                  font-bold
                  text-[10px]
                  sm:text-xs
                  uppercase
                  rounded-full
                  tracking-wider
                "
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="
              text-lg
              sm:text-xl
              font-black
              uppercase
              tracking-wide
              text-white
              mb-1
              line-clamp-2
            "
          >
            {exercise.name}
          </h3>

          {/* Equipment */}
          <p
            className="
              text-xs
              sm:text-sm
              text-gray-400
              font-medium
              mb-4
              truncate
            "
          >
            {exercise.equipment}
          </p>

          {/* Stats Footer */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-2
              pt-3
              border-t
              border-gray-800/80
              text-[10px]
              sm:text-xs
              text-gray-300
            "
          >
            <div className="flex items-center gap-1">
              <span>◯</span>
              <span>{exercise.duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <span>🔥</span>
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <span>☆</span>
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;