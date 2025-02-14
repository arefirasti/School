export const POST = async (url, body) => {
  const res = await fetch(`https://schoolm.liara.run/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};
