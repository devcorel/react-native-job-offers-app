export const getRandomPublishDate = () => {
   const threeMonths = 1100000000;
   const dateTime = new Date();
   const today = dateTime.getTime();
   const fromDate = today - threeMonths;
   let randomDate = fromDate + Math.floor(Math.random() * threeMonths);

   return randomDate;
};
