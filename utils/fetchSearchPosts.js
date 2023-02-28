export const fetchSearchPosts = async (searchTerm) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchTerm}`
  );
  const data = await response.json();

  return data?.posts;
};
