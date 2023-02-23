export const fetchPostDetails = async (slug) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPost/${slug}`
  );
  const data = await response.json();

  return data?.post;
};
