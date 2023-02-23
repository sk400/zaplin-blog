export const fetchAllPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllPosts`
  );
  const data = await response.json();

  return data?.posts;
};
