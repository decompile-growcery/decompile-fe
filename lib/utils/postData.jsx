export default async function postData(data, url) {
  let isError = "";
  let result = "";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}${url}`, {
    method: "POST",
    body: data,
  })
    .then((res) => {
      if (res.ok) {
        isError = false;
        return res;
      } else {
        throw new Error("Error");
      }
    })
    .catch((e) => {
      isError = true;
    });
    
    if (!isError)
      result = await response.json();

  return [isError, result];
}
