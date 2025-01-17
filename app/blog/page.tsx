import Image from "next/image"
import { getArticles } from "@/app/api/get-articles/getArticles"

export default async function Blog() {
    const articles = await getArticles()

    return articles?.map((article) => (
        <div key={article.id}>
            <h1 className="text-3xl font-extrabold leading-none w-[40rem] text-center pb-6">{article.title}</h1>
            <Image
                className="object-cover w-[40rem]"
                src={article.img.url}
                alt={article.title}
                width={article.img.width}
                height={article.img.height}
                priority
            />
            <h2>{article.createdAt}</h2>
        </div>
    ))

}   