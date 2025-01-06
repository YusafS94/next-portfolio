import Link from "next/link";
import Image from "next/image";

export default function Project({
  id,
  title,
  content,
  date,
  tags,
}: {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}) {
  return (
    <div
      key={id}
      className="py-4 px-[10vw] overflow-scroll overflow-x-hidden max-h-[100vh] border border-red-500 w-full"
    >
      <Link href={`/portfolio/projects`}>Back</Link>
      <div className="flex flex-col md:flex-row max-h-[90vh] md:max-h-[75vh]">
          <div className="w-full md:w-1/2">
              <h1 className="text-3xl text-center">{title}</h1>
              <div className="border rounded-lg my-2">
                <p className="text-gray-500">{date}</p>
                <p>{content}</p>
                <ul className="list-disc ml-4">
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
          </div>
          <div className="w-full md:w-1/2">
              <Image
                className="rounded-lg overflow-hidden self-center"
                src="/images/project-placeholder.jpg"
                alt="Placeholder image"
                width={800}
                height={800}
              />
              <Image
                className="rounded-lg overflow-hidden self-center"
                src="/images/project-placeholder.jpg"
                alt="Placeholder image"
                width={800}
                height={800}
              />
          </div>
      </div>
    </div>
  );
}
