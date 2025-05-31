import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const terminalLines = [
  "> Initializing developer environment...",
  "> Fetching latest portfolio modules...",
  "> Establishing secure connection...",
  "> Welcome to Yusaf's Portfolio.",
  "> Type 'start' or click to enter the system.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-primary-1 text-accent-2 font-mono flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg text-start space-y-2 bg-primary-2 p-8 rounded-lg">
        {terminalLines.map((line, idx) => (
          <p key={idx} className="whitespace-pre-wrap text-base md:text-lg">
            {line}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-lg bg-accent-1 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-accent-2 md:text-base"
        >
          ▶ Enter Portfolio
          <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </main>
  );
}
