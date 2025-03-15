import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-16 mb-16 sm:mt-32 sm:mb-32 grid gap-12 sm:gap-24 grid place-content-center">

        <div className="bg-zinc-800 fixed top-0 pl-8 pr-8 h-12 sm:h-16 w-[100vw]">
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

            <Link className="text-xl sm:text-3xl font-bold text-zinc-400 hover:text-yellow-300 transition-colors hover:underline" href="/">
              home
            </Link>
          </div>

        </div>

        {children}
      </div>
    </>
  );
}