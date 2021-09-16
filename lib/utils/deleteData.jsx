export default async function postData(data, url, token = false) {
    let isError = "";
    let result = "";
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}${url}`, {
      method: "DELETE",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
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
  