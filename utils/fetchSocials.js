export const fetchSocials = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/getSocials`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return data?.socials;
};
