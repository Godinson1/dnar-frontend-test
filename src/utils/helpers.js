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

export const sortTitle = (data, search) => {
  return data?.filter((data) =>
    data?.name.toLowerCase().includes(search.toLowerCase())
  );
};
