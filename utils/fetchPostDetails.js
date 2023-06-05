export const fetchPostDetails = async (slug) => {
  const response = await fetch(`${process.env.BASE_URL}/api/getPost/${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return data?.post;
};
