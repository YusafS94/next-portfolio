import Link from "next/link";
import Image from "next/image";

export default function Project( {id, title, content, date, tags}: { id: string, title: string, content: string, date: string, tags: string[]}) {
    return (
        <div key={id} className="p-4 overflow-hidden">
            <Link href={`/portfolio/projects/project/${id}`}><h1>{title}</h1></Link>
            <p className="text-gray-500">{date}</p>
            <p>{content}</p>
            <ul className="list-disc ml-4">
                {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            <Link href={`/portfolio/projects`}>Back</Link>
            <Image className="rounded-lg overflow-hidden" src="/images/project-placeholder.jpg" alt="Placeholder image" width={700} height={500} />
        </div>
    )
}