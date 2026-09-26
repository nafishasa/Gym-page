import Link from "next/link";

const EmptyState = () => {
  return (
    <div
      className="
        w-full
        max-w-5xl
        mx-auto
        my-4 sm:my-6
        px-5 py-10
        sm:px-8 sm:py-12
        md:px-12
        bg-[#111622]
        border border-slate-800
        rounded-2xl sm:rounded-3xl
        text-center
        flex flex-col items-center justify-center
       
      "
    >
      <h2
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          font-black
          uppercase
          tracking-wider
          text-white
          mb-2
        "
      >
        NOTHING HERE YET
      </h2>

      <p
        className="
          text-gray-400
          text-sm
          sm:text-base
          mb-6
          max-w-md
          leading-relaxed
        "
      >
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="
          inline-flex
          items-center
          justify-center
          w-full
          sm:w-auto
          bg-[#ccff00]
          hover:bg-[#b3e600]
          text-black
          font-extrabold
          text-xs
          tracking-wider
          uppercase
          px-6
          py-3.5
          rounded-full
          transition-all
          duration-200
        "
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyState;