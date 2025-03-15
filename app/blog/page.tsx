import Image from "next/image"
import { getArticles } from "@/app/api/get-articles/getArticles"
import Link from "next/link"
import { formatDateTime } from "../utils/utils"

export default async function Blog() {
    const articles = await getArticles()

    return articles?.map((article) => {
        const { time, date } = formatDateTime(article.createdAt);
        return (
            <div key={article.id} className="p-2 sm:p-0">
                <h1 className="text-l sm:text-3xl font-extrabold leading-none sm:w-[40rem] sm:text-center pb-6">{article.title}</h1>
                <Link href={`/blog/${article.id}`} target="_blank">
                    <Image
                        className="object-fill sm:object-cover sm:w-[40rem] pb-2 transition-opacity duration-300 hover:opacity-60"
                        src={article.img.url}
                        alt={article.title}
                        width={article.img.width}
                        height={article.img.height}
                        priority
                        unoptimized
                    />
                </Link>

                <h2 className="text-xs sm:text-m">Posted on {date} @ {time}</h2>

                <div className="text-center pt-2">
                    <Link className="text-m sm:text-xl font-bold hover:text-yellow-300 transition-colors hover:underline" href={`/blog/${article.id}`} target="_blank">Read more</Link>
                </div>
            </div>
        )
    })

}   