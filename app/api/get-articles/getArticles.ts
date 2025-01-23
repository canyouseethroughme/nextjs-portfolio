export type Article = {
    id: string;
    title: string;
    createdAt: string;
    img: {
        url: string;
        width: number;
        height: number;
    };
    text: {
        raw: string;
    };
}

export async function getArticles(): Promise<Article[]> {
    const endpoint = process.env.NEXT_HYGRAPH_ENDPOINT;
    if (!endpoint) {
        throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(endpoint, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `query Articles {
                            articles {
                                id
                                title
                                createdAt
                                img {
                                    url
                                    width
                                    height
                                }
                                text {
                                    raw
                                }
                            }
                        }`,
        }),
    });

    const data = await response.json();
    return data.data.articles.reverse()

}