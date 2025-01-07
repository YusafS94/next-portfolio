import Link from "next/link";
import Image from "next/image";

export default function Project({
  id,
  title,
  content,
  date,
  tags,
  image1,
  image2,
  image3,
  image4,
}: {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}) {
  return (
    <div
      key={id}
      className="overflow-scroll overflow-x-hidden w-full"
    >
      {/* <Link href={`/portfolio/projects`}>Back</Link> */}

      <div className="flex flex-col h-full">
        <div className="w-full flex flex-col md:flex-row p-4">
          <div className="border border-lines-1 p-2">
            <h2>project-details</h2>
          </div>
          <div className="border border-lines-1 p-2">
            <p className="">name: {title}</p>
          </div>
          <div className="border border-lines-1 p-2">
            <p>date: {date}</p>
          </div>
          <div className="border border-lines-1 p-2">
            <ul className="flex gap-2">
              {tags.map((tag) => (
                <li className="border rounded-xl px-2" key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full border border-red-600 max-h-[100vh] overflow-scroll">
          <div className="w-2/3 p-4">
            <h1 className="text-3xl">E-commerce Website Redesign</h1>
            <p>
              A complete overhaul of an outdated e-commerce platform, focusing
              on user experience and modern design principles.
            </p>
            <br />
            <p className="text-xl">Project Details</p>
            <p>
              This project involved redesigning and developing a new e-commerce
              website for a client in the fashion industry. The main goals were
              to improve the user interface, streamline the checkout process,
              and implement a responsive design for mobile users. We also
              integrated a new inventory management system and improved site
              performance through optimization techniques.
            </p>
          </div>
          <div className="w-2/3 mx-auto">
            <Image
              src={`/images/${image1}.jpg`}
              alt=""
              width={1000}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
