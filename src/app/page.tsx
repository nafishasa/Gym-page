import Banner from "./components/Banner";
import ExerciseCard from "./components/Card";
import { Idata } from "./type/DataType";

const getData = async (): Promise<Idata[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  const data = await res.json();
  return data;
};

const page = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-10">
      
      {/* Banner */}
      <div>
        <Banner />
      </div>

      {/* Library Header */}
      <div className="mt-8 sm:mt-10 mb-5 sm:mb-6">
        <h2 className="font-black text-2xl sm:text-3xl text-white">
          THE LIBRARY
        </h2>

        <p className="font-semibold text-sm sm:text-base text-[#9ca3af] mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Exercise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {data.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>

    </div>
  );
};

export default page;