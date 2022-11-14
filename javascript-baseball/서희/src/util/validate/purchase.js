const isPurchasePriceToNumber = (price) => {
  return [...price].some((ch) => {
    return !("0" <= ch && ch <= "9");
  });
};
const getTotalProfit = (purchase, resultProfit) => {
  return ((resultProfit / purchase) * 100).toFixed(1);
};
module.exports = { isPurchasePriceToNumber, getTotalProfit };
