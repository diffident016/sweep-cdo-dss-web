export const groupArrayByKey = (arr: Array<any>, key: string) =>
  arr.reduce((acc, obj) => {
    const group = obj[key];
    (acc[group] = acc[group] || []).push(obj);
    return acc;
  }, {});
