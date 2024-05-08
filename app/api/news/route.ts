import axios from "axios";

export const GET = async (req: Request, res: Response) => {
    const url = `https://cryptonews-api.com/api/v1?tickers=BTC&items=3&token=${process.env.CRYPTO_NEWS_API_KEY}`

    try {
        const response = await axios.get(url);
    

        return new Response(JSON.stringify(response.data), {status: 201})
    } catch (error) {
        return new Response("Failed to get news", { status: 500 })
    }
}