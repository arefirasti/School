export const GETWiTHTOKEN = async (url, token) => {
  const res = await fetch(`https://schoolm.liara.run/${url}`, {
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return res;
};
