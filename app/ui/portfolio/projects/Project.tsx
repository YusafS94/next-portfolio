import Link from "next/link";
import Image from "next/image";

export default function Project( {id, title, content, date, tags}: { id: string, title: string, content: string, date: string, tags: string[]}) {
    return (
        <div key={id} className="py-4 px-24 overflow-scroll overflow-x-hidden h-[500px] border border-red-500 w-full">
            <Link href={`/portfolio/projects`}>Back</Link>
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
            <Image className="rounded-lg overflow-hidden self-center" src="/images/project-placeholder.jpg" alt="Placeholder image" width={700} height={500} />
        </div>
    )
}