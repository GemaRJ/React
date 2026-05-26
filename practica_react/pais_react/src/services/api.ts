export const getPaises = async () => {

  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,languages"
  );

  return await res.json();

};