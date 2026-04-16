const Contact = () => {
  return (
    <section
      className="flex flex-col gap-6 lg:gap-12 scroll-mt-17 lg:scroll-mt-24 text-[.9rem] lg:text-[1rem]"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <div className="font--heading text-[1rem] lg:text-[1.4rem] uppercase font-medium text-center">
          Have a project in mind?
        </div>
        <div className="text-neutral-400">Contact me, let's have a talk!</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4">
        <div className="flex flex-col gap-2 lg:gap-4">
          <div>
            <div className="label">Email</div>
            <a href="mailto:muhammedbinramli@gmail.com">
              muhammedbinramli@gmail.com
            </a>
          </div>
          <div>
            <div className="label">Phone</div>
            <a href="tel:+919745431920">+91 9745431920</a>
          </div>
          <div>
            <div className="label">Location</div>
            <div>Varkala, Kerala, India</div>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input type="email" className="input" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone</label>
            <input type="number" className="input" />
          </div>
          <button
            type="submit"
            className="self-stretch lg:self-start font-medium text-black bg-white p-2 "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
