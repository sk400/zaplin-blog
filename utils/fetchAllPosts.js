export const fetchAllPosts = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/getAllPosts`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return data?.posts;
};
