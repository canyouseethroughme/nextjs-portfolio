import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-16 mb-16 sm:mt-32 sm:mb-32 grid gap-6 sm:gap-12 grid place-content-center pt-4">
        <div className="bg-neutral-900 opacity-90 fixed top-0 pl-2 pr-2 sm:pl-8 sm:pr-8 h-12 sm:h-16 w-[100vw] border-b-[1px] border-neutral-700">
          <div className="flex justify-self-center h-full items-center justify-between w-full max-w-[2048px]">
            <Link href="/">
              <Image
                src="/favicon.ico"
                alt="Stefan Andrei - Logo"
                width={48}
                height={48}
                priority
                unoptimized
                style={{ width: "auto", height: 36 }}
              />
            </Link>

            <Link className="text-l sm:text-xl font-bold text-zinc-600 hover:text-yellow-300 transition-colors hover:underline leading-[0.8] sm:leading-[0.9]" href="/">
              stefan
              <br />
              andrei

            </Link>
          </div>

        </div>

        {children}
      </div>
    </>
  );
}