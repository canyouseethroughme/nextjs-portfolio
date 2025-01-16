import Image from "next/image";
import Link from "next/link";

const links = [
  { href: 'https://github.com/canyouseethroughme', label: 'github' },
  { href: 'https://www.linkedin.com/in/stefandrei/', label: 'linkedin' },
  { href: 'https://twitter.com/itstefandrei', label: 'twitter' },
  { href: '/', label: 'blog (w.i.p.)' },
]

export default function Home() {

  return (
    <main className="flex flex-col h-screen sm:flex-row">
      <div className="w-full h-1/2 sm:w-1/2 sm:h-full relative overflow-hidden">
        <div className="inset-0 w-full h-full">
          <Image
            src="/stefan_andrei.jpg"
            alt="Stefan Andrei - portrait photo"
            width={1012}
            height={1018}
            priority
            className="object-cover inset-0 w-full h-full animate-fadeIn"
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
            rel="noopener noreferrer"
          >
            {link.label}
          </Link>
        ))}
        {/* expose resume through anchor tag because Link component is designed to handle navigation within the apps route */}
        <a href='/cv.pdf'
          className="text-5xl font-bold hover:text-yellow-300 hover:underline transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          resume
        </a>
      </div>
    </main>
  );
}
