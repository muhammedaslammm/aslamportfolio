const Banner = () => {
  return (
    <section
      className="flex flex-col items-center gap-5 lg:gap-5 py-2 lg:py-4 scroll-mt-14 lg:scroll-mt-24"
      id="about"
    >
      <h2 className="w-[85%] lg:w-4/6 text-left lg:text-center text-[1rem] lg:text-[1.2rem] font-medium">
        Hey, I’m Muhammed Aslam — a Fullstack Developer with 1+ year of
        real-world experience. I turn your requirements into working solutions,
        and fix related problems along the way.
      </h2>
      <div className="flex justify-center flex-1 min-h-0">
        <img
          src="https://i.pinimg.com/1200x/d8/45/d9/d845d9cb3fd697c092a10d3604162181.jpg"
          alt="Aslam Portfolio Profile Picture"
          className="h-[23rem] lg:h-[28rem] w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
