export default async function postData(data, url, token = false) {
  console.log(data)
  let isError = "";
  let result = "";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}${url}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      console.log(res)
      if (res.ok) {
        isError = false;
        return res;
      } else {
          try {
            eval(data); 
        } catch (e) {
            if (e instanceof SyntaxError) {
                console.log("eval error");
                console.log(e.message);
                console.log("eoe")
            }
        }
        throw new Error("Error");
      }
    })
    .catch((e) => {
      console.log(e)
      isError = true;
    });
    
    if (!isError)
      result = await response.json();

  return [isError, result];
}
