import Image from "next/image";
import Link from "next/link";

const links = [
  { href: 'https://github.com/canyouseethroughme', label: 'github' },
  { href: 'https://www.linkedin.com/in/stefandrei/', label: 'linkedin' },
  { href: 'https://twitter.com/itstefandrei', label: 'twitter' },
  { href: '/', label: 'blog (work in progress)' },
  { href: '/cv.pdf', label: 'resume' },
]

export default function Home() {

  return (
    <main className="flex flex-col h-screen sm:flex-row">
      <div className="w-full h-1/2 sm:w-1/2 sm:h-full relative overflow-hidden">
        <div className="">
          <Image
            src="/me.jpg"
            alt="Decorative image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col justify-around sm:justify-center items-center sm:items-start p-4 sm:p-8 space-y-0 sm:space-y-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-5xl font-bold hover:text-yellow-300 hover:underline transition-colors"
            target="_blank"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
