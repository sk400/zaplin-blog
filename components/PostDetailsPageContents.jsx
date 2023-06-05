import { PortableText } from "@portabletext/react";
import { TopContainer } from "components";
import { RichTextComponents } from "components/RichTextComponents";

const PostDetailsPageContents = ({ postDetails }) => {
  return (
    <>
      <TopContainer featuredPost={postDetails} />
      <article className="max-w-5xl py-7 mx-auto px-5">
        <PortableText
          value={postDetails?.body}
          components={RichTextComponents}
        />
      </article>
    </>
  );
};

export default PostDetailsPageContents;
