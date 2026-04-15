const About = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="font--heading text-center font-medium uppercase text-[1.2rem]">
        About Myself
      </div>
      <div className="w-2/3 mx-auto flex flex-col gap-4">
        <p className="text-justify">
          I’m a fullstack developer focused on solving real client requirements.
          I build admin dashboards and client-side applications, handling
          everything from frontend to backend and deployment. When working with
          clients, I take time to understand their needs by asking the right
          questions and exploring the problem in depth. This often leads to
          suggesting improvements and solving related issues beyond the initial
          requirement.
        </p>
        <p className="text-justify">
          I primarily work with React, TailwindCSS, Node.js, Express, and
          MongoDB, while continuously improving my UI/UX skills.
        </p>
      </div>
    </section>
  );
};

export default About;
