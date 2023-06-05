export const fetchEditorPics = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/getEditorPics`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return data?.editorPics;
};
