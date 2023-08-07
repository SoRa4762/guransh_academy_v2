type Props = {};

const Programs = (props: Props) => {
  return (
    <div
      id="programs"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 px-6 lg:px-16"
    >
      <h1 className="flex h-40 w-full items-center justify-center text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 py-6 md:py-10 lg:py-14">
        Programs
      </h1>
      <div className="grid grid-rows-2 gap-8 text-slate-50 font-bold">
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-8">
          <div className="h-full w-full flex justify-center items-center">
            <p className="flex justify-center items-center bg-red-600 rounded-full text-center text-xs md:text-sm lg:text-base lg:h-40 lg:w-40 sm:h-32 sm:w-32 h-20 w-20 shadow-md shadow-gray-600">
              Parent Infant
            </p>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <p className="flex justify-center items-center bg-yellow-500 rounded-full text-center text-xs md:text-sm lg:text-base lg:h-28 lg:w-28 sm:h-20 sm:w-20 h-12 w-12 shadow-md shadow-gray-600">
              Toddler
            </p>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <p className="flex justify-center items-center bg-cyan-400 rounded-full text-center text-xs md:text-sm lg:text-base  lg:h-36 lg:w-36 sm:h-28 sm:w-28 h-16 w-16 shadow-md shadow-gray-600">
              Primary
            </p>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <p className="flex justify-center items-center bg-slate-950 rounded-full text-center text-xs md:text-sm lg:text-base  lg:h-48 lg:w-48 sm:h-36 sm:w-36 h-24 w-24 shadow-md shadow-gray-600">
              Elementary
            </p>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <p className="flex justify-center items-center bg-yellow-500 rounded-full text-center text-xs md:text-sm lg:text-base  lg:h-36 lg:w-36 sm:h-28 sm:w-28 h-[4.5rem] w-[4.5rem] shadow-md shadow-gray-600">
              English
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 lg:px-48">
          <div className="h-full w-full flex justify-center items-start lg:items-center">
            <p className="lg:h-48 lg:w-48 sm:h-36 sm:w-36 h-24 w-24 flex justify-center items-center bg-slate-950 rounded-full text-center text-xs md:text-sm lg:text-base shadow-md shadow-gray-600">
              Physical Education
            </p>
          </div>
          <div className="h-full w-full flex justify-center items-start lg:items-center">
            <p className="lg:h-28 lg:w-28 sm:h-20 sm:w-20 h-12 w-12 flex justify-center items-center bg-yellow-500 rounded-full text-center text-xs md:text-sm lg:text-base shadow-md shadow-gray-600 ">
              Nepali
            </p>
          </div>
          <div className="h-full w-full flex justify-center items-start lg:items-center">
            <p className="lg:h-48 lg:w-48 sm:h-36 sm:w-36 h-24 w-24 flex justify-center items-center bg-red-600 rounded-full text-center text-xs md:text-sm lg:text-base shadow-md shadow-gray-600 ">
              Before & After Care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
