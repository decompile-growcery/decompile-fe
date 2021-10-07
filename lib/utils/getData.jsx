export default async function getData(url, token = false) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}${url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    let data = "";

    if (res)
      data = await res.json();      
      
    return data.data;
  }
  