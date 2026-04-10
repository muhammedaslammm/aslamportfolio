import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <header className="flex flex-col items-center gap-2 py-8 shrink-0">
        <div className="font--heading text-[1.8rem] font-bold">
          MUHAMMED ASLAM
        </div>
        <p className="w-[60%] text-[1.2rem] text-center">
          Hey, My name is Muhammed Aslam. I’m a software-developer, who designs
          and builds websites for your business
        </p>
      </header>
      <section className="flex justify-center flex-1 min-h-0">
        <img
          src="https://i.pinimg.com/736x/fb/7b/47/fb7b47d5d0e2b118543acc7606ada88f.jpg"
          alt="Aslam Portfolio Profile Picture"
          className="h-full w-auto object-contain"
        />
      </section>
      <footer className="flex justify-center gap-8 py-8 shrink-0 text-neutral-400">
        <Link
          href="/about-me"
          className="hover:text-white transition-colors font-normal"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="hover:text-white transition-colors font-normal"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:text-white transition-colors font-normal"
        >
          Contact
        </Link>
      </footer>
    </main>
  );
}
