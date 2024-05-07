import axios from "axios";

export const getCoinNews = (coin: string, setError: any) => {
  const news = axios
    .get(`https://cryptonews-api.com/api/v1?tickers=BTC&items=3&token=${process.env.NEXT_PUBLIC_CRYPTO_NEWS_API_KEY}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return news;
};