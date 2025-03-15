import Image from "next/image"
import { getArticles } from "@/app/api/get-articles/getArticles"
import Link from "next/link"
import { formatDateTime } from "../utils/utils"

export default async function Blog() {
    const articles = await getArticles()

    return articles?.map((article) => {
        const { time, date } = formatDateTime(article.createdAt);
        return (
            <div key={article.id} >
                <h1 className="text-3xl font-extrabold leading-none w-[40rem] text-center pb-6">{article.title}</h1>
                <Link href={`/blog/${article.id}`} target="_blank">
                    <Image
                        className="object-cover w-[40rem] pb-2 transition-opacity duration-300 hover:opacity-60"
                        src={article.img.url}
                        alt={article.title}
                        width={article.img.width}
                        height={article.img.height}
                        priority
                        unoptimized
                    />
                </Link>

                <h2>Posted on {date} @ {time}</h2>
            </div>
        )
    })

}   