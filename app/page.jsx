import ContactIcons from "@/components/ContactIcons";

export default function Home() {
  return (
    <main className="w-[90%] h-screen mx-auto py-8 flex items-center gap-8">
      <div className="flex-1 h-full flex flex-col justify-between">
        <header className="flex items-center justify-between">
          <div id="logo" className="text-[1.2rem] font-semibold">
            MA
          </div>
          <button className="hover:underline transition-colors cursor-pointer">
            Send Enquiry
          </button>
        </header>
        <p className="text-[2rem] leading-normal mb-[12rem]">
          Hey, My name is Muhammed Aslam. I'm a software developer, who design
          and build websites for your business
        </p>
        <footer className="flex justify-between items-end">
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About Me</li>
          </ul>
          <ContactIcons />
        </footer>
      </div>
      <div className="h-full">
        <img
          src="https://i.pinimg.com/736x/38/90/a1/3890a13a35ef05f9a4039c4c27541a7c.jpg"
          alt="profile image"
          className="h-full"
        />
      </div>
    </main>
  );
}
