"use client";
import Link from "next/link";

export default function GlitchSplash() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary-1 text-secondary-4 font-mono px-6">
      <h1
        className="text-4xl md:text-5xl font-bold relative glitch"
        data-text="Yusaf Saddiq"
      >
        Yusaf Saddiq
      </h1>
      <p className="mt-2 text-sm text-center">
        Frontend Developer // Digital Tinkerer
      </p>
      <Link
        href="/portfolio"
        className="mt-6 inline-block hover:bg-accent-1 bg-primary-2 hover:text-primary-1 text-secondary-4 py-2 px-6 rounded transition"
      >
        ⚡ Enter Portfolio
      </Link>

      <style jsx>{`
        .glitch {
          position: relative;
          color: white;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          animation: glitch 1s infinite;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -1px 0 red;
          animation-delay: 0.1s;
        }
        .glitch::after {
          left: -2px;
          text-shadow: 1px 0 blue;
          animation-delay: 0.2s;
        }
        @keyframes glitch {
          0% {
            clip-path: inset(80% 0 0 0);
          }
          10% {
            clip-path: inset(10% 0 85% 0);
          }
          20% {
            clip-path: inset(10% 0 75% 0);
          }
          30% {
            clip-path: inset(40% 0 50% 0);
          }
          40% {
            clip-path: inset(0 0 20% 0);
          }
          50% {
            clip-path: inset(20% 0 20% 0);
          }
          60% {
            clip-path: inset(80% 0 0 0);
          }
          70% {
            clip-path: inset(10% 0 85% 0);
          }
          80% {
            clip-path: inset(10% 0 75% 0);
          }
          90% {
            clip-path: inset(40% 0 50% 0);
          }
          100% {
            clip-path: inset(0 0 20% 0);
          }
        }
      `}</style>
    </main>
  );
}
