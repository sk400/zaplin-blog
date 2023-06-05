import { SimpleGrid } from "components/chakraui";
import React from "react";
import EditorPic from "./EditorPic";
import { fetchEditorPics } from "utils/fetchEditorPics";

const EditorPics = async () => {
  const editorPics = await fetchEditorPics();

  return (
    <SimpleGrid minChildWidth="300px" spacing="40px">
      {editorPics?.map((editorPic) => (
        <EditorPic key={editorPic?._id} editorPic={editorPic} />
      ))}
    </SimpleGrid>
  );
};

export default EditorPics;
