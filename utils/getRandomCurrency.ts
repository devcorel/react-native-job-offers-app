export const getRandomCurrency = () => {
   const currencies = ['USD', 'MX', 'EUR'];
   return currencies[Math.floor(Math.random() * currencies.length)];
};
