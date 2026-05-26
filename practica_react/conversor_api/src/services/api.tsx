export const getNombresMonedas = async () => {

const res = await fetch(
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
);

return await res.json();

};

export const getMonedas = async () => {

const res = await fetch(
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
);

return await res.json();

};