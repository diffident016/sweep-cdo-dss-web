export const formatNumberWithCommas = (num: number): string => {
  return new Intl.NumberFormat().format(num);
};
