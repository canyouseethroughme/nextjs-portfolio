import Image from "next/image";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              The website is currently under construction!
            </code>
          </li>

          <li className="mb-2">
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              A new and improved version will be live soon.
            </code>
          </li>

          <li>
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Stay tuned for updates!
            </code>
          </li>
        </ul>

      </main>

      <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center">
        <a
          className="flex items-center hover:underline hover:underline-offset-4"
          href="https://github.com/canyouseethroughme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={48}
            height={48}
          />
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            GitHub
          </code>
        </a>

        <a
          className="flex items-center hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/stefandrei/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={48}
            height={48}
          />
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            LinkedIn
          </code>
        </a>

        <a
          className="flex items-center hover:underline hover:underline-offset-4"
          href="https://twitter.com/itstefandrei"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/twitter.svg"
            alt="GitHub icon"
            width={48}
            height={48}
          />
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            Twitter
          </code>
        </a>
      </footer>
    </div >
  );
}
