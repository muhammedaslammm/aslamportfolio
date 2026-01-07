import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[85%] xl:w-[80%] mx-auto py-4 xl:py-8 h-screen flex flex-col text-[.8rem] xl:text-[1.1rem]">
      <header className="flex justify-between items-center ">
        <div className="">Muhammed Aslam</div>
        <Link href="/" className="hover:text-neutral-400 transition-colors">
          About Me
        </Link>
      </header>
      <section className="flex-1 text-[2rem]">
        <div className="pt-[4rem]">
          Full stack developer with experience building static websites <br />{" "}
          and full stack web applications for real clients.
        </div>
      </section>
      <footer className="flex justify-between items-center">
        <p className="text-neutral-400">Muhammed Aslam. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-neutral-400 transition-colors">
            Projects
          </Link>
          <Link href="/" className="hover:text-neutral-400 transition-colors">
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
