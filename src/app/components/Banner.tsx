import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="
        bg-[#0f1117]
        text-white
        px-5 py-8
        sm:px-8 sm:py-10
        md:p-12
        rounded-2xl sm:rounded-3xl
        border border-gray-800
        flex flex-col md:flex-row
        items-center
        justify-between
        gap-8 lg:gap-12
        max-w-7xl
        mx-auto
        my-4 sm:my-6
      "
    >
      {/* Left Content */}
      <div
        className="
          flex-1
          w-full
          space-y-5 sm:space-y-6
          max-w-2xl
          text-center md:text-left
        "
      >
        <span className="text-[#a3e635] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
          WORKOUT LIBRARY
        </span>

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            tracking-tight
            leading-tight
            uppercase
            font-sans
          "
        >
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p
          className="
            text-gray-400
            text-sm
            md:text-base
            leading-relaxed
            max-w-lg
            mx-auto md:mx-0
          "
        >
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          lock it into today&apos;s plan, and watch the week&apos;s work
          add up.
        </p>

        <div className="pt-1">
          <button
            className="
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
              rounded-lg
              transition-all
              duration-200
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="
          flex-1
          flex
          justify-center
          md:justify-end
          w-full
          max-w-xl
          mx-auto
        "
      >
        <div
          className="
            relative
            w-full
            max-w-sm
            sm:max-w-md
            md:max-w-lg
            aspect-square
            flex
            items-center
            justify-center
          "
        >
          <Image
            src="/banner.png"
            alt="Banner Workout Machine"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;