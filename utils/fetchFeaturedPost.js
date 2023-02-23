export const fetchFeaturedPost = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFeaturedPost`
  );
  const data = await response.json();

  return data?.featuredPost;
};
