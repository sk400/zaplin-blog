export const fetchEditorPics = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEditorPics`
  );
  const data = await response.json();

  return data?.editorPics;
};
