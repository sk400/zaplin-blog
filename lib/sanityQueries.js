import { groq } from "next-sanity";

export const allPostsQuery = groq`
*[_type=='post']{
    _id,
     _createdAt,
     description,
      author->,
      categories[]->{
        _id,
      title,
        description
      },
      mainImage,
      publishedAt,
      slug,
      title
  }`;

export const socialsQuery = groq`
*[_type=='social']{
  _id,
    title,
    url
}
`;

export const postDetailQuery = (slug) => {
  const query = groq`
  *[_type=='post' && slug.current == '${slug}'][0]{
    _id,
     _createdAt,
     description,
      author->,
      body,
      categories[]->{
        _id,
      title,
        description
      },
      mainImage,
      publishedAt,
      slug,
      title
  }
  `;

  return query;
};
