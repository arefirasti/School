export const GET = (url) => {
  const res = fetch(`https://schoolm.liara.run/${url}`);
  return res;
};
