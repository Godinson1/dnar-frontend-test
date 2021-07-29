export const formatNumber = (number) => {
  const formatter = new Intl.NumberFormat("US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
  });
  const result = formatter.format(number);
  return result;
};
