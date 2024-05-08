export const getCoinNews = async () => {
  try {
    const response = await fetch(`/api/coingecko/coins`);
    const coins = await response.json();
    if(coins){
      console.log("RESPONSE>>>", response.data);
      return coins;
    }
  } catch (e) {
    console.log("ERROR>>>", e.message);
  }
};