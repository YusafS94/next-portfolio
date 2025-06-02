import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 items-start md:items-center p-2 border-t border-lines-1 text-sm">
      <ul className="flex flex-col md:flex-row gap-2 font-normal text-secondary-1">
        <li>
          <Link href="/portfolio/privacy-policy">privacy-policy</Link>
        </li>
        <li>
          <Link href="/portfolio/terms-of-use">terms-of-use</Link>
        </li>
      </ul>
      <div className="flex items-center justify-center font-normal text-secondary-1">
        <span className="flex items-center justify-center font-normal text-secondary-1">© copyright Yusaf Saddiq 2025 - {new Date().getFullYear()} </span>
      </div>
      <div className="">
        <a
          href="https://github.com/YusafS94"
          aria-label="YusafS94 Github Profile"
          target="_blank"
          className="hover:underline underline-offset-2 text-secondary-1 hover:text-secondary-4 transition-colors duration-200"
        >
          github
        </a>
      </div>
    </div>
  );
}
