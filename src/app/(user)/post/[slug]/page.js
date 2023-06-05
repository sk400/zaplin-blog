import { PostDetailsPageContents } from "components";
import { client } from "lib/sanity.client";
import { allPostsQuery } from "lib/sanityQueries";
import { fetchPostDetails } from "utils/fetchPostDetails";

const getAllSlugs = async () => {
  const posts = await client.fetch(allPostsQuery);

  const allSlugs = posts?.map((item) => item?.slug?.current);
  return allSlugs;
};

export const revalidate = 5;

export async function generateStaticParams() {
  const allSlugs = await getAllSlugs();

  return allSlugs?.map((slug) => ({
    slug: slug,
  }));
}

const Page = async ({ params: { slug } }) => {
  const postDetails = await fetchPostDetails(slug);

  return (
    <>
      <PostDetailsPageContents postDetails={postDetails} />
    </>
  );
};

export default Page;
