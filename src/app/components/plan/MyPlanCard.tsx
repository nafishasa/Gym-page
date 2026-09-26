"use client";

import { Idata } from "@/app/type/DataType";
import Image from "next/image";
import Link from "next/link";

interface Iplan {
  plan: Idata;
  onDelete: (id: number) => void;
  showDoneButton: boolean;
}

const MyPlanCard = ({
  plan,
  onDelete,
  showDoneButton,
}: Iplan) => {
  return (
    <div
      className="
        w-full
        bg-[#151922]
        border border-slate-800
        rounded-2xl
        p-3 sm:p-4
        flex flex-col
        md:flex-row
        md:items-center
        gap-4 sm:gap-5
      "
    >
      {/* Image */}
      {plan.image ? (
        <Image
          src={plan.image}
          alt={plan.name}
          width={144}
          height={80}
          className="
            w-full
            h-44
            sm:h-52
            md:w-36
            md:h-20
            object-cover
            rounded-xl
            shrink-0
          "
        />
      ) : (
        <div
          className="
            w-full
            h-44
            sm:h-52
            md:w-36
            md:h-20
            bg-slate-800
            rounded-xl
            flex
            items-center
            justify-center
            text-gray-500
            shrink-0
          "
        >
          No Image
        </div>
      )}

      {/* Exercise Info */}
      <div className="flex-1 min-w-0">
        <h2
          className="
            text-white
            font-black
            uppercase
            text-base
            sm:text-lg
            truncate
          "
        >
          {plan.name}
        </h2>

        <p className="text-gray-400 text-sm font-medium mt-1">
          {plan.equipment}
        </p>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            mt-2
            text-xs
            sm:text-sm
            text-gray-300
          "
        >
          <span>◯ {plan.duration} min</span>
          <span>🔥 {plan.caloriesBurned} kcal</span>
          <span>☆ {plan.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full md:w-auto">
        <div
          className="
            flex
            flex-col
            sm:flex-row
            md:flex-col
            lg:flex-row
            items-stretch
            sm:items-center
            gap-2
            sm:gap-3
          "
        >
          {/* View Details */}
          <Link
            href={`/${plan.id}`}
            className="
              w-full
              sm:w-auto
              text-center
              px-4
              py-2
              rounded-xl
              border border-slate-600
              text-gray-300
              text-sm
              font-semibold
              hover:bg-slate-800
              transition
            "
          >
            View Details
          </Link>

          {/* Mark as Done */}
          {showDoneButton && (
            <button
              className="
                w-full
                sm:w-auto
                px-4
                py-2
                rounded-xl
                bg-[#c8ff00]
                text-black
                text-sm
                font-bold
                hover:bg-[#b5e600]
                transition
              "
            >
              ✓ Mark as Done
            </button>
          )}

          {/* X Button */}
          <button
            onClick={() => onDelete(plan.id)}
            className="
              w-full
              sm:w-9
              h-9
              rounded-xl
              sm:rounded-full
              border border-slate-600
              text-gray-400
              hover:text-white
              hover:bg-red-500
              hover:border-red-500
              transition
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;