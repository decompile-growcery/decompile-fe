import useUser from "./useUser";

export default async function useCart() {
  const user = useUser();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}cart`, {
    headers: {
      Authorization: `Bearer ${user}`,
    },
  });

  const data = await res.json();
  return data;
}
