import { Toaster } from "sonner";
import About from "./sections/About";
import Banner from "./sections/Banner";
import ContactSection from "./sections/contact/ContactSection";
import FAQ from "./sections/FAQ";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <main className="flex flex-col pt-14 lg:pt-24 gap-8 lg:gap-12">
        <Banner />
        <div className="w-[85%] lg:w-[55%] mx-auto flex flex-col gap-16 lg:gap-20">
          <About />
          <Projects />
          <FAQ />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
