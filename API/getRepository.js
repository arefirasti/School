export const GET = (url) => {
  const res = fetch(`http://80.75.14.90:9090/${url}`);
  return res;
};
