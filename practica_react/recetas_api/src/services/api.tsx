export const getTags = async () => {

  const res = await fetch(
    "https://dummyjson.com/recipes/tags"
  );

  return await res.json();

};

export const getRecetas = async (tag: string) => {

  const res = await fetch(
    `https://dummyjson.com/recipes/tag/${tag}`
  );

  return await res.json();

};