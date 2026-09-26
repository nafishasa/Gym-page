const Footer = () => {
  return (
    <footer className="border-t border-[#1f2937] bg-[#090a0d] px-4 sm:px-7 py-6 sm:py-8">
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-4
          text-center
          sm:text-left
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c2f800"
            strokeWidth="3"
            className="h-5 w-5"
          >
            <path d="M6 5v14" />
            <path d="M18 5v14" />
            <path d="M3 9v6" />
            <path d="M21 9v6" />
            <path d="M6 12h12" />
          </svg>

          <span className="text-lg font-bold text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;