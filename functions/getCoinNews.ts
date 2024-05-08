export const getCoinNews = async (coin: string, setError: any) => {
  try {
    const response = await fetch(`/api/news`);
    const news = await response.json();
    if(news){
      return news;
    }
  } catch (e) {
    console.log(e.message);
    if (setError) {
      setError(true);
    }
  }
};