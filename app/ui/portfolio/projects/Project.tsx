import Link from "next/link";

export default function Project( {id, title, content, date}: { id: string, title: string, content: string, date: string}) {
    return (
        <div key={id} className="border border-gray-200 p-4 my-4">
            <Link href={`/portfolio/projects/project/${id}`}><h1>{title}</h1></Link>
            <p className="text-gray-500">{date}</p>
            <p>{content}</p>
        </div>
    )
}