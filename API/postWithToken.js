export const POSTWITHTOKEN = async (url, request, token, body) => {
  console.log(url, request, token, body);
  const res = await fetch(`https://schoolm.liara.run/${url}`, {
    method: `${request}`,
    headers: {
      Authorization: `token ${token}`,
    },
    body: body,
  });
  return res;
};
