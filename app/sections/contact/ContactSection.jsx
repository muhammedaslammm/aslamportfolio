import Form from "./Form";
import Info from "./Info";

const ContactSection = () => {
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
        <Info />
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
