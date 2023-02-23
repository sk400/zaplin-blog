import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import EditorPic from "./EditorPic";

const EditorPics = ({ editorPics }) => {
  // console.log(editorPics);
  const numbers = [1, 2, 3];
  return (
    <SimpleGrid minChildWidth="300px" spacing="40px">
      {editorPics?.map((editorPic) => (
        <EditorPic key={editorPic?._id} editorPic={editorPic} />
      ))}
    </SimpleGrid>
  );
};

export default EditorPics;
