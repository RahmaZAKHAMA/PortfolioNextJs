import NavbarSimple from "@/Components/NavbarSimple";

import Image from "next/image";



export default function Home() {
  return (
    <div>
      <div className="md:mt-24 container w-full h-[60vh] mx-auto">
        <Image
        width={20} height={20}
          className="w-full h-full rounded-lg"
          src="/fondindex.jpg"
          alt="home"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex mt-32 justify-center">
          <p className="text-white text-2xl font-bold">
            <span className="text-base">Hello,</span> <br />
            <br />
            I am Rahma Zakhama <br />A web developer and .NET developer
            <br />
            <br />
            <span className="text-base">Modern and responsive web design</span>
          </p>
        </div>
      </div>
      <div
        id="presentation"
        className="px-5 mt-5 pb-16 container w-full mx-auto h-fit flex flex-col items-center bg-gray-100 rounded-lg"
      >
        <p className="text-3xl text-red-700 pb-12 border-b w-40 mt-16">
          Presentation
        </p>
        <p className="mt-16 text-center">
          <span className="font-bold text-red-700">Network Engineer</span> by
          education, I currently work as a
          <span className="font-bold text-red-700">.NET</span> developer, but I
          am passionate about
          <span className="font-bold text-red-700">WEB development</span> .
          That's why I've decided to embark on a new journey as a web developer
          with GoMYCode
          <br />
          <span>
            I have some interesting projects, would you like to see my
            <a href="#" className="text-red-700">
              CV
            </a>
          </span>
        </p>
      </div>

      <div
        id="skills"
        className="mt-5 pb-8 container w-full mx-auto h-fit flex flex-col items-center bg-gray-100 rounded-lg"
      >
        <p className="text-3xl text-red-700 pb-12 border-b w-18 mt-16">
          Skills
        </p>
        <p className="mt-16 md:mx-0 mx-5 text-center md:mb-24">
          My skills are at your service, I am equipped to handle a wide range of
          challenges and projects. My skills are constantly evolving and
          developing
        </p>
      </div>
    </div>
  );
}
