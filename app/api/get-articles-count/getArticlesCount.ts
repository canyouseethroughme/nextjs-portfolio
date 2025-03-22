type ArticlesConnection = {
    count: number
}

export async function getArticlesCount(): Promise<ArticlesConnection> {
    const endpoint = process.env.NEXT_HYGRAPH_ENDPOINT;
    if (!endpoint) {
        throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
    }
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(endpoint, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
                    query MyQuery {
                        articlesConnection {
                            aggregate {
                                count
                            }
                        }
                    }
            `,
        }),
    });

    const data = await response.json();
    return data.data.articlesConnection.aggregate

}