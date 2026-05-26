export const getEquipos = async () => {

const res = await fetch(
"https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga"
);

return await res.json();

};