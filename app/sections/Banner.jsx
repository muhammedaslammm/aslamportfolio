const Banner = () => {
  return (
    <section
      className="flex flex-col items-center gap-5 py-4 scroll-mt-24"
      id="about"
    >
      <h2 className="w-4/6 text-center text-[1.2rem]">
        Hey, I’m Muhammed Aslam — a Fullstack Developer with 1+ year of
        real-world experience. I turn your requirements into working solutions,
        and fix related problems along the way.
      </h2>
      <div className="flex justify-center flex-1 min-h-0">
        <img
          src="https://i.pinimg.com/1200x/d8/45/d9/d845d9cb3fd697c092a10d3604162181.jpg"
          alt="Aslam Portfolio Profile Picture"
          className="h-[28rem] w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
