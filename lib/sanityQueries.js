import { groq } from "next-sanity";

export const allPostsQuery = groq`
*[_type=='post']{
    _id,
     _createdAt,
     description,
      author->,
      category,
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
      category,
      mainImage,
      publishedAt,
      slug,
      title
  }
  `;

  return query;
};

export const searchQuery = (searchTerm) => {
  const query = groq`
  *[_type=='post' && title match '${searchTerm}' || description match '${searchTerm}' || category match '${searchTerm}'  ]{
    _id,
     _createdAt,
     description,
      author->,
      category,
      mainImage,
      publishedAt,
      slug,
      title
  }
  `;

  return query;
};
