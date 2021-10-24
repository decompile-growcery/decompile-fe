export default async function postData(
  data,
  url,
  token = false,
  json = false,
  formData = false
) {
  let isError = "";
  let result = "";
  let type = "";

  if (json) {
    type = "application/json";
  } else {
    if (formData) {
      type = "multipart/form-data";
    } else {
      type = "application/x-www-form-urlencoded";
    }
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}${url}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": type,
    },
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

  if (!isError) result = await response.json();

  return [isError, result];
}
