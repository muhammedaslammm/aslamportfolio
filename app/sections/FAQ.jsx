import Item from "@/components/Item";
import content from "@/data/FAQs";

const FAQ = () => {
  return (
    <section
      className="flex flex-col gap-2 lg:gap-4 scroll-mt-17 lg:scroll-mt-26"
      id="faq"
    >
      <div className="font--heading text-center font-medium uppercase text-[1rem] lg:text-[1.4rem]">
        How i handle projects
      </div>
      <div>
        {content.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
